<?php
declare(strict_types=1);
namespace App\RequestValidators;
use Valitron\Validator;
use App\Exception\ValidationException;
use App\Contracts\EntityManagerServiceInterface;
use App\Contracts\RequestValidatorInterface;
use App\Entity\User;


class RegisterUserRequestValidator implements RequestValidatorInterface{

    public function __construct(private readonly EntityManagerServiceInterface $entityManager){


    }

    function validate( array $data): array{

         $v = new Validator($data);
        $v->rule('required', ['nombre','email','password','confirmPassword']);  
        $v->rule('email', 'email');
        $v->rule('equals', 'confirmPassword', 'password')->label('Confirma Password');
        $v->rule(
            fn($field, $value, $params, $fields) => ! $this->entityManager->getRepository(User::class)->count(
                ['email' => $value]
            ),
            'email'
        )->message('Usuario con la direccion de correo ya existe');

        if (! $v->validate()) {
            
            throw new ValidationException($v->errors());
        }
        return $data;
    }
}