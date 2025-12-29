<?php
declare(strict_types=1);
namespace App\RequestValidators;
use Valitron\Validator;
use App\Exception\ValidationException;
use Doctrine\ORM\EntityManager;
use App\Contracts\RequestValidatorInterface;
use App\Entity\User;


class CreateContribuyenteRequestValidator implements RequestValidatorInterface{


    function validate( array $data): array{

         $v = new Validator($data);
        $v->rule('required', ['nombres','apellidos','rfc','curp','telefono','email','regimenFiscal','tipoDeclaracion','impuestoObligacion']);  
        $v->rule('numeric', 'telefono');


            
        if (! $v->validate()) {
            
        
            throw new ValidationException($v->errors());
        }
        return $data;
    }
}