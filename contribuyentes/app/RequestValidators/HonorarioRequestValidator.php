<?php

declare(strict_types = 1);

namespace App\RequestValidators;

use App\Contracts\RequestValidatorInterface;
use App\Exception\ValidationException;
use App\Services\ContribuyenteService;
use Valitron\Validator;

class HonorarioRequestValidator implements RequestValidatorInterface
{
    public function __construct(protected readonly ContribuyenteService $contribuyenteService)
    {
    }

    public function validate(array $data): array
    {
        $v = new Validator($data);

        $v->rule('required', ['fecha', 'honorario', 'impuesto','transferencia','concepto', 'contribuyente']);
        $v->rule('lengthMax', 'concepto', 255);
        $v->rule('lengthMax', 'observaciones', 255);
        $v->rule('dateFormat', 'dateFormat', 'm/d/Y g:i A');
        $v->rule('numeric', 'honorario');
        $v->rule('numeric', 'impuesto');
        $v->rule('numeric', 'transferencia');
        $v->rule('integer', 'contribuyente');
        $v->rule(
            function($field, $value, $params, $fields) use (&$data) {
                $id = (int) $value;

                if (! $id) {
                    return false;
                }

                $contribuyente = $this->contribuyenteService->getById($id);

                if ($contribuyente) {
                    $data['contribuyente'] = $contribuyente;

                    return true;
                }

                return false;
            },
            'contribuyente'
        )->message('Contribuyente no encontrado');

        if (! $v->validate()) {
            throw new ValidationException($v->errors());
        }

        return $data;
    }
}