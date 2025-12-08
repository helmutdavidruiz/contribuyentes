<?php
declare(strict_types=1);

namespace App\Middleware;

use App\Contracts\AuthInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use App\Contracts\EntityManagerServiceInterface;
use Slim\Views\Twig;
use Slim\Routing\RouteContext;
class AuthMiddleware implements MiddlewareInterface{ 



    public function __construct(private readonly ResponseFactoryInterface $responseFactory,
                                private readonly AuthInterface $auth ,
                                private readonly Twig $twig,
                                private readonly EntityManagerServiceInterface $entityManagerService){


    }
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface{

       # if($user = $this->auth->user()){

     #       return $handler->handle($request->withAttribute('user', $user));
      #  }

      if ($user = $this->auth->user()) {
            $this->twig->getEnvironment()->addGlobal('auth', ['id' => $user->getId(), 'name' => $user->getNombre()]);
            $this->twig->getEnvironment()->addGlobal(
                'current_route',
                RouteContext::fromRequest($request)->getRoute()->getName()
            );

            $this->entityManagerService->enableUserAuthFilter($user->getId());

            return $handler->handle($request->withAttribute('user', $user));
        }

        return $this->responseFactory->createResponse(302)->withHeader('Location','/login');


    }
}