<?php

declare(strict_types = 1);

use Slim\App;
use App\Session;
use App\Config;
use App\Contracts\AuthInterface;
use App\RouteEntityBindingStrategy;
use App\Filters\UserFilter;
use DoctrineExtensions\Query\Mysql\Year;
use DoctrineExtensions\Query\Mysql\Month;
use DoctrineExtensions\Query\Mysql\DateFormat;
use App\Contracts\EntityManagerServiceInterface;
use App\Services\EntityManagerService;
use App\Contracts\SessionInterface;
use App\Contracts\UserProviderServiceInterface;
use App\Services\UserProviderService;
use Doctrine\ORM\EntityManagerInterface;
use App\Enum\AppEnvironment;
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Slim\Csrf\Guard;
use Slim\Views\Twig;
use Slim\Interfaces\RouteParserInterface;
use Symfony\Bridge\Twig\Extension\AssetExtension;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Asset\VersionStrategy\JsonManifestVersionStrategy;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookup;
use Symfony\WebpackEncoreBundle\Asset\TagRenderer;
use Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension;
use Twig\Extra\Intl\IntlExtension;
use Slim\Factory\AppFactory;
use App\Auth;
use App\Contracts\RequestValidatorFactoryInterface;
use App\Csrf;
use App\Enum\SameSite;
use App\DataObjects\SessionConfig;
use App\Enum\StorageDriver;
use App\RequestValidators\RequestValidatorFactory;
use League\Flysystem\Filesystem;
use Clockwork\Clockwork;
use Clockwork\DataSource\DoctrineDataSource;
use Clockwork\Storage\FileStorage;


use function DI\create;

return [
   
    App::class => function(ContainerInterface $container){
        
        AppFactory::setContainer($container);

        $addMiddlewares = require CONFIG_PATH . '/middleware.php';
        $router = require CONFIG_PATH . '/routes/web.php';
        
        $app = AppFactory::create();
       
        $app->getRouteCollector()->setDefaultInvocationStrategy(
            new RouteEntityBindingStrategy(
                $container->get(EntityManagerServiceInterface::class),
                $app->getResponseFactory()
            )
        );

        $router($app);
        $addMiddlewares($app);
        return $app;
    },

    Config::class                 => create(Config::class)->constructor(
        require CONFIG_PATH . '/app.php'),
    EntityManagerInterface::class           => function (Config $config) {
        $ormConfig = ORMSetup::createAttributeMetadataConfiguration(
            $config->get('doctrine.entity_dir'),
            $config->get('doctrine.dev_mode')
        );

        $ormConfig->addFilter('user', UserFilter::class);

        if (!$config->get('doctrine.dev_mode')) {
            $ormConfig->setAutoGenerateProxyClasses(true);
        }

        if (class_exists('DoctrineExtensions\Query\Mysql\Year')) {
            $ormConfig->addCustomDatetimeFunction('YEAR', Year::class);
        }

        if (class_exists('DoctrineExtensions\Query\Mysql\Month')) {
            $ormConfig->addCustomDatetimeFunction('MONTH', Month::class);
        }

        if (class_exists('DoctrineExtensions\Query\Mysql\DateFormat')) {
            $ormConfig->addCustomStringFunction('DATE_FORMAT', DateFormat::class);
        }

        return new EntityManager(
            DriverManager::getConnection($config->get('doctrine.connection'), $ormConfig),
            $ormConfig
        );
    },
    Twig::class                   => function (Config $config, ContainerInterface $container) {
        $twig = Twig::create(VIEW_PATH, [
            'cache'       => STORAGE_PATH . '/cache/templates',
            'auto_reload' => AppEnvironment::isDevelopment($config->get('app_environment')),
        ]);

        $twig->addExtension(new IntlExtension());
        $twig->addExtension(new EntryFilesTwigExtension($container));
        $twig->addExtension(new AssetExtension($container->get('webpack_encore.packages')));

        return $twig;
    },
    /**
     * The following two bindings are needed for EntryFilesTwigExtension & AssetExtension to work for Twig
     */
    'webpack_encore.packages'     => fn() => new Packages(
        new Package(new JsonManifestVersionStrategy(BUILD_PATH . '/manifest.json'))
    ),
    'webpack_encore.tag_renderer' => fn(ContainerInterface $container) => new TagRenderer(
        new EntrypointLookup(BUILD_PATH . '/entrypoints.json'),
        $container->get('webpack_encore.packages')
    ),
    ResponseFactoryInterface::class =>fn(App $app) =>$app->getResponseFactory(),
    AuthInterface::class => fn(ContainerInterface $container) => $container->get(Auth::class),

    UserProviderServiceInterface::class => fn(ContainerInterface $container) => $container->get(UserProviderService::class),
    SessionInterface::class => fn(Config $config) => new Session(new SessionConfig(
        $config->get('session.name',''),
        $config->get('session.flash_name','flash'),
        $config->get('session.secure',true),
        $config->get('session.httponly',true),
        SameSite::from($config->get('session.samesite','lax')),
         $config->get('session.domain','mnasociados')
   )
  ),
  RequestValidatorFactoryInterface::class => fn(ContainerInterface $container) => $container->get(RequestValidatorFactory::class
),
'csrf' => fn(ResponseFactoryInterface $responseFactory, Csrf $csrf) => new Guard($responseFactory, persistentTokenMode: true, failureHandler: $csrf->failureHandler()),
Filesystem::class => function(Config $config){
    // Configure and return a Filesystem instance here, for example:
       $adapter = match($config->get('storage.driver')){
        StorageDriver::Local => new League\Flysystem\Local\LocalFilesystemAdapter(STORAGE_PATH),
       };
     return new League\Flysystem\Filesystem($adapter);
},
Clockwork::class                        => function (EntityManagerInterface $entityManager) {
        $clockwork = new Clockwork();

        $clockwork->storage(new FileStorage(STORAGE_PATH . '/clockwork'));
        $clockwork->addDataSource(new DoctrineDataSource($entityManager));

        return $clockwork;
},
EntityManagerServiceInterface::class    => fn(EntityManagerInterface $entityManager) => new EntityManagerService(
        $entityManager
),
RouteParserInterface::class             => fn(App $app) => $app->getRouteCollector()->getRouteParser(),
];
