<?php

declare(strict_types = 1);

namespace App\DataObjects;

use App\Entity\Contribuyente;
use DateTime;

class HonorarioData
{
    public function __construct(
        public readonly DateTime $fecha,
        public readonly float $honorario,
        public readonly float $impuesto,
        public readonly float $transferencia,
        //public readonly float $total,
        public readonly string $concepto,
         public readonly string $observaciones,       
        public readonly Contribuyente $contribuyente
    ) {
    }
}