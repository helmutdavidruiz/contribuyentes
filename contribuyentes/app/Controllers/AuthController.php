<?php 

declare(strict_types=1);

namespace App\Controllers;

use App\Contracts\AuthInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use Slim\Views\Twig;
use Valitron\Validator;
use App\Exception\ValidationException;
use App\DataObjects\RegisterUserData;
use App\RequestValidators\RegisterUserRequestValidator;
use App\Contracts\RequestValidatorFactoryInterface;
use App\RequestValidators\UserLoginRequestValidator;

class AuthController{

    public function __construct(private readonly Twig $twig, 
                                private readonly RequestValidatorFactoryInterface $requestValidatorFactory, 
                                private readonly AuthInterface $auth){

    }

    public function loginView(Request $request, Response $response): Response
    {
        return $this->twig->render($response, 'auth/login.twig');
    }

    public function registerView(Request $request, Response $response): Response
    {
       
        return $this->twig->render($response, 'auth/register.twig');
    }

      public function register(Request $request, Response $response): Response
    {
        
    

        $data=$this->requestValidatorFactory->make(RegisterUserRequestValidator::class)->validate($request->getParsedBody());

       


        $this->auth->register(new RegisterUserData($data['nombre'],$data['email'],$data['password']));

       
        return $response->withHeader('Location','/')->withStatus(302);
    }

    public function logIn(Request $request, Response $response): Response{

        $data = $this->requestValidatorFactory->make(UserLoginRequestValidator::class)->validate($request->getParsedBody());

       

       if(! $this->auth->attemptLogin($data)){
        throw new ValidationException(['password' => ['Has ingresado un usuario o password invalido']]);
       }
        

        return $response->withHeader('Location','/')->withStatus(302);

    }

       public function logOut(Request $request, Response $response): Response{

         $this->auth->logOut();


        return $response->withHeader('Location','/')->withStatus(302);

    }
}