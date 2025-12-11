<?php
declare(strict_types=1);
namespace App\Controllers;
use App\Contracts\EntityManagerServiceInterface;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Contracts\RequestValidatorFactoryInterface;
use Slim\Views\Twig;
use App\RequestValidators\CreateContribuyenteRequestValidator;
use App\Services\ContribuyenteService;
use App\DataObjects\ContribuyenteData;
use App\ResponseFormatter;
use App\RequestValidators\UpdateContribuyenteRequestValidator;
use App\Entity\Contribuyente;
use App\Services\RequestService;
class ContribuyenteController{

    public function __construct(private readonly Twig $twig,
                                private readonly RequestValidatorFactoryInterface $requestValidatorFactory,
                                private readonly ContribuyenteService $contribuyenteService,
                                private readonly ResponseFormatter $responseFormatter,
                                private readonly RequestService $requestService,
                                private readonly EntityManagerServiceInterface $entityManagerService)
                              { }


    public function index(Request $request, Response $response): Response{
      
        return $this->twig->render(
          $response, 'contribuyentes/index.twig',
          [ 'contribuyentes' => $this->contribuyenteService->getContribuyentes(),]
        );

    }

    public function store(Request $request, Response $response): Response{


        $data=$this->requestValidatorFactory->make(CreateContribuyenteRequestValidator::class)->validate($request->getParsedBody());
        
        #var_dump($data);
       
        $contribuyente = $this->contribuyenteService->crear(new ContribuyenteData($data['nombres'],$data['apellidos'],$data['rfc'],$data['curp'],$data['telefono'],$data['email'],$data['regimenFiscal'],$data['tipoDeclaracion'],$data['impuestoObligacion']), $request->getAttribute('user'));
        
        $this ->entityManagerService->sync($contribuyente);

        return $response->withHeader('Location','/contribuyentes')->withStatus(302);
    }

    public function delete(Request $request, Response $response, array $args): Response{
      
        $contribuyente = $this->contribuyenteService->getById((int) $args['id']);

        $this->entityManagerService->delete($contribuyente, true);
       
        #$this->contribuyenteService->delete((int) $args['id']);
        return $response;

    }

       public function get(Request $request, Response $response, array $args): Response
    {
        $contribuyente = $this->contribuyenteService->getById((int) $args['id']);

        if (! $contribuyente) {
            return $response->withStatus(404);
        }

        $data = ['id' => $contribuyente->getId(), 
                 //'identificador' => $contribuyente->getIdentificador(),
                 'nombres' => $contribuyente->getNombres(), 
                 'apellidos' => $contribuyente->getApellidos(),
                 'rfc' => $contribuyente->getRfc(), 
                 'curp' => $contribuyente->getCurp(), 
                 'telefono' => $contribuyente->getTelefono(), 
                 'email' => $contribuyente->getEmail(), 
                 'regimenFiscal' => $contribuyente->getRegimenFiscal(), 
                 'tipoDeclaracion' => $contribuyente->getTipoDeclaracion(), 
                 'impuestoObligacion' => $contribuyente->getImpuestoObligacion(),
                 ];

         return   $this->responseFormatter->asJson($response, $data);
        
    } 

    public function update(Request $request, Response $response, array $args): Response
    {
       
        $data=$this->requestValidatorFactory->make(UpdateContribuyenteRequestValidator::class)->validate($args +
            $request->getParsedBody());


        $contribuyente = $this->contribuyenteService->getById((int) $args['id']);

       

        if (! $contribuyente) {
            return $response->withStatus(404);
        }

        
        $this->entityManagerService->sync($this->contribuyenteService->actualizar($contribuyente,new ContribuyenteData($data['nombres'],$data['apellidos'],$data['rfc'],$data['curp'],$data['telefono'],$data['email'],$data['regimenFiscal'],$data['tipoDeclaracion'],$data['impuestoObligacion'])));
        return   $response;
        
    } 

       public function load(Request $request, Response $response): Response
    {
      


        $params      = $this->requestService->getDataTableQueryParameters($request);
        $contribuyentes  = $this->contribuyenteService->getPaginatedContribuyentes($params);

        $transformer = function (Contribuyente $contribuyente) {
            return [
                'id'        => $contribuyente->getId(),
                'identificador' => $contribuyente->getIdentificador(),
                'nombres'      => $contribuyente->getNombres(),
                'apellidos'      => $contribuyente->getApellidos(),
                'rfc'      => $contribuyente->getRfc(),
                'curp'      => $contribuyente->getCurp(),
                'telefono'      => $contribuyente->getTelefono(),
                'email'      => $contribuyente->getEmail(),
                'regimenFiscal'      => $contribuyente->getRegimenFiscal(),
                'tipoDeclaracion'      => $contribuyente->getTipoDeclaracion(),
                'impuestoObligacion'      => $contribuyente->getImpuestoObligacion(),     
            ];
        };

        $totalContribuyentes = count($contribuyentes);

         return $this->responseFormatter->asDataTable(
            $response,
            array_map($transformer, (array) $contribuyentes->getIterator()),
            $params->draw,
            $totalContribuyentes
        );
    }
}