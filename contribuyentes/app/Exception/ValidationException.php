<?php

declare(strict_types = 1);

namespace App\Exception;

use Throwable;

class ValidationException extends \RuntimeException
{
    public function __construct(
        public readonly array $errors, 
        string $message = 'Errores de validacion', 
        int $code = 422, 
        ?Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }
}