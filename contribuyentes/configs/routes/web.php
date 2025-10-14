<?php

declare(strict_types = 1);

use App\Controllers\HomeController;
use App\Controllers\AuthController;
use App\Controllers\ContribuyenteController;
use App\Middleware\AuthMiddleware;
use App\Middleware\GuestMiddleware;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;
use App\Controllers\HonorarioController;

return function (App $app) {
    $app->get('/', [HomeController::class, 'index'])->add(AuthMiddleware::class);

    $app->group('',function (RouteCollectorProxy $guest) {
      $guest->get('/login',[AuthController::class, 'loginView']);
      $guest->get('/register',[AuthController::class, 'registerView']);
      $guest->post('/login',[AuthController::class, 'logIn']);
      $guest->post('/register',[AuthController::class, 'register']);

    })->add(GuestMiddleware::class);

    $app->post('/logout',[AuthController::class, 'logOut'])->add(AuthMiddleware::class);

    $app->group('/contribuyentes',function (RouteCollectorProxy $contribuyentes) {
      $contribuyentes->get('',[ContribuyenteController::class, 'index']);
      $contribuyentes->get('/load',[ContribuyenteController::class, 'load']);
      $contribuyentes->post('',[ContribuyenteController::class, 'store']);
      $contribuyentes->delete('/{id:[0-9]+}',[ContribuyenteController::class, 'delete']);
      $contribuyentes->get('/{id:[0-9]+}', [ContribuyenteController::class, 'get']);
      $contribuyentes->post('/{id:[0-9]+}', [ContribuyenteController::class, 'update']);

    })->add(AuthMiddleware::class);

     $app->group('/honorarios', function (RouteCollectorProxy $transactions) {
        $transactions->get('', [HonorarioController::class, 'index']);
        $transactions->get('/load', [HonorarioController::class, 'load']);
        $transactions->post('', [HonorarioController::class, 'store']);
        $transactions->delete('/{id:[0-9]+}', [HonorarioController::class, 'delete']);
        $transactions->get('/{id:[0-9]+}', [HonorarioController::class, 'get']);
        $transactions->post('/{id:[0-9]+}', [HonorarioController::class, 'update']);
    })->add(AuthMiddleware::class);


};
