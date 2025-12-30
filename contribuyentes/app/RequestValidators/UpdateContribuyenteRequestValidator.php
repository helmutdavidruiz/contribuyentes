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
        $v->rule('required', ['rfc','curp','telefono','email','regimenFiscal','tipoDeclaracion','impuestoObligacion']);  
        #$v->rule('integer','id');
        $v->rule('numeric', 'telefono');
        $v->rule('lengthMax', 'telefono', 20);
        $v->rule('lengthMax', 'rfc', 13);
        $v->rule('lengthMax', 'curp', 18);
        $v->rule('lengthMax', 'email', 70);
        $v->rule('lengthMax', 'regimenFiscal', 100);
        $v->rule('lengthMax', 'tipoDeclaracion', 100);
        $v->rule('lengthMax', 'impuestoObligacion', 100);

        if (! $v->validate()) {
            
            throw new ValidationException($v->errors());
        }
        return $data;
    }
}