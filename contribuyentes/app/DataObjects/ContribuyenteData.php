<?php
declare(strict_types=1);
namespace App\DataObjects;
class ContribuyenteData{

    public function __construct(
         public readonly string $nombres,
         public readonly string $apellidos,
         public readonly string $rfc,
         public readonly string $curp,
         public readonly string $telefono,
         public readonly string $email,
         public readonly string $regimenFiscal,
          public readonly string $tipoDeclaracion,
           public readonly string $impuestoObligacion,
           //public readonly string $clasificacion
         ){
    }
}