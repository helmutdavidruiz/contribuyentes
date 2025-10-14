<?php

declare(strict_types=1);
namespace App\Middleware;   
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use Slim\Views\Twig;
use App\Contracts\SessionInterface;
class ValidationErrorMiddleware implements MiddlewareInterface{


    public function __construct(private readonly Twig $twig, private readonly SessionInterface $session){


    }
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface{
     
          if($errors = $this->session->getFlash('errors')){
            

            $this->twig->getEnvironment()->addGlobal('errors', $errors);
              
          
          }

          return $response = $handler->handle($request);
        
    }
}