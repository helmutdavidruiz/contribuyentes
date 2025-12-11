<?php

declare(strict_types = 1);

namespace App\Controllers;

use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\RequestValidatorFactoryInterface;
use App\DataObjects\HonorarioData;
use App\Entity\Honorario;
use App\RequestValidators\HonorarioRequestValidator;
use App\ResponseFormatter;
use App\Services\ContribuyenteService;
use App\Services\RequestService;
use App\Services\HonorarioService;
use DateTime;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Views\Twig;

class HonorarioController
{
    public function __construct(
        private readonly Twig $twig,
        private readonly RequestValidatorFactoryInterface $requestValidatorFactory,
        private readonly HonorarioService $honorarioService,
        private readonly ResponseFormatter $responseFormatter,
        private readonly RequestService $requestService,
        private readonly ContribuyenteService $contribuyenteService,
        private readonly EntityManagerServiceInterface $entityManagerService
    ) {
    }

    public function index(Request $request, Response $response): Response
    {
        return $this->twig->render(
            $response,
            'honorarios/index.twig',
            ['contribuyentes' => $this->contribuyenteService->getIdentificadorContribuyentes()]
        );
    }

    public function store(Request $request, Response $response): Response
    {
        $data = $this->requestValidatorFactory->make(HonorarioRequestValidator::class)->validate(
            $request->getParsedBody()
        );

        $honorario=$this->honorarioService->create(
            new HonorarioData(
                new DateTime($data['fecha']),
                (float) $data['honorario'],
                (float) $data['impuesto'],
                (float) $data['transferencia'],
                $data['concepto'],
                $data['observaciones'],
                $data['contribuyente']
            ),
            $request->getAttribute('user')
        );

         $this->entityManagerService->sync($honorario);

        return $response;
    }

   public function delete(Request $request, Response $response, array $args): Response
    {
        $honorario= $this->honorarioService->getById((int) $args['id']);

        $this->entityManagerService->delete($honorario, true);

        return $response;
    } 

    public function get(Request $request, Response $response, array $args): Response
    {
        $honorario = $this->honorarioService->getById((int) $args['id']);

        if (! $honorario) {
            return $response->withStatus(404);
        }

        $data = [
            'id'          => $honorario->getId(),
            'fecha'       => $honorario->getFecha()->format('Y-m-d\TH:i'),
            'honorario'   => $honorario->getHonorario(),
            'impuesto'         => $honorario->getImpuesto(),
            'transferencia'    => $honorario->getTransferencia(),
            //'total'            => $honorario->getTotal(),
            'concepto'         => $honorario->getConcepto(),
            'observaciones'    => $honorario->getObservaciones(),
            'contribuyente'    => $honorario->getContribuyente()->getId(),
        ];

        return $this->responseFormatter->asJson($response, $data);
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        $data = $this->requestValidatorFactory->make(HonorarioRequestValidator::class)->validate(
            $args + $request->getParsedBody()
        );

        $id = (int) $data['id'];

        if (! $id || ! ($honorario = $this->honorarioService->getById($id))) {
            return $response->withStatus(404);
        }

         $this->entityManagerService->sync(
        $this->honorarioService->update(
            $honorario,
            new HonorarioData(
                new DateTime($data['fecha']),
                (float) $data['honorario'],
                (float) $data['impuesto'],
                (float) $data['transferencia'],
                $data['concepto'],
                $data['observaciones'],
                $data['contribuyente']
            )
          )
        );

        return $response;
    }

    public function load(Request $request, Response $response): Response
    {
        $params       = $this->requestService->getDataTableQueryParameters($request);
        $honorarios = $this->honorarioService->getPaginatedHonorarios($params);
        $transformer  = function (Honorario $honorario) {
            return [
            'id'          => $honorario->getId(),    
            'fecha'       => $honorario->getFecha()->format('Y-m-d\TH:i'),
            'honorario'   => $honorario->getHonorario(),
            'impuesto'         => $honorario->getImpuesto(),
            'transferencia'    => $honorario->getTransferencia(),
            'total'            => $honorario->getTotal(),
            'concepto'         => $honorario->getConcepto(),
            'observaciones'    => $honorario->getObservaciones(),
            'contribuyente'    => $honorario->getContribuyente()->getIdentificador(),
            ];
        };

        $totalHonorarios = count($honorarios);

        return $this->responseFormatter->asDataTable(
            $response,
            array_map($transformer, (array) $honorarios->getIterator()),
            $params->draw,
            $totalHonorarios
        );
    }

     public function alternarRevisado(Request $request, Response $response, array $args): Response
    {
        $id = (int) $args['id'];

        if (! $id || ! ($honorario = $this->honorarioService->getById($id))) {
            return $response->withStatus(404);
        }

        $this->honorarioService->alternarRevisado($honorario);
        $this->entityManagerService->sync();

        return $response;
    }
}