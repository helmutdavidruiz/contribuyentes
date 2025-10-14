<?php
declare(strict_types=1);

namespace App\Contracts;

interface ExcelInterface{

    public function crear(array $data): int;
    
}