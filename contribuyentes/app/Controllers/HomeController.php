<?php

declare(strict_types = 1);

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Services\HonorarioService;
use App\Services\ContribuyenteService;
use App\ResponseFormatter;
use Slim\Views\Twig;

class HomeController
{
    public function __construct(private readonly Twig $twig,
                                    private readonly HonorarioService $honorarioService,
                                    private readonly ContribuyenteService $contribuyenteService,
                                    private readonly ResponseFormatter $responseFormatter)
    {
        
    }

    public function index(Request $request, Response $response): Response
     {
        $startDate             = \DateTime::createFromFormat('Y-m-d', date('Y-m-01'));
        $endDate               = new \DateTime('now');
        $totals                = $this->honorarioService->getTotals($startDate, $endDate);
        $recentHonorarios    = $this->honorarioService->getHonorariosRecientes(10);
        $topContribuyentesMayorImpuestos = $this->contribuyenteService->getTopContribuyentesMayorImpuestos(4);

        return $this->twig->render(
            $response,
            'dashboard.twig',
            [
                'totales'                => $totals,
                'honorarios'            => $recentHonorarios,
                'topContribuyentesMayorImpuestos' => $topContribuyentesMayorImpuestos,
            ]
        );
    }

      public function getEstadisticasDelAnioHastaFecha(Response $response): Response
    {
        $data = $this->honorarioService->getResumenMensual((int) date('Y'));
     
        return $this->responseFormatter->asJson($response, $data);
    }
}
