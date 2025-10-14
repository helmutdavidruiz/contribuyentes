<?php
declare(strict_types=1);
namespace App\RequestValidators;
use Valitron\Validator;
use App\Exception\ValidationException;
use Doctrine\ORM\EntityManager;
use App\Contracts\RequestValidatorInterface;
use App\Entity\User;


class UpdateContribuyenteRequestValidator implements RequestValidatorInterface{


    function validate( array $data): array{

         $v = new Validator($data);
        $v->rule('required', ['id','nombres','apellidos','rfc','curp','telefono','email','regimenFiscal','tipoDeclaracion','impuestoObligacion']);  
        $v->rule('integer','id');
        
        if (! $v->validate()) {
            
            throw new ValidationException($v->errors());
        }
        return $data;
    }
}