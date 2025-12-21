<?php

declare(strict_types=1);

namespace App\Files;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;

use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7\Response;
use Nyholm\Psr7\Stream;
use Psr\Http\Message\ResponseInterface;

class UtilExcel
{

  public function creaFile(array $data, array $data1): string
  {

    $spreadsheet = new Spreadsheet();


    $header = ['ID', 'NOMBRES', 'APELLIDOS', 'RFC', 'CURP', 'TELEFONO', 'EMAIL', 'REGIMEN FISCAL', 'TIPO DECLARACION', 'IMPUESTO OBLIGACION', 'IDENTIFICADOR', 'CREADO', 'MODIFICADO'];

    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setTitle('Contribuyentes');
    $sheet->fromArray($header, null, 'A1'); // Set header row 

    if (empty($data)) {
      
       $row = 2;
       $columnLetter = Coordinate::stringFromColumnIndex(1);

        // Build the cell coordinate (e.g., A1, B1, C1, A2, etc.)
        $cellCoordinate = $columnLetter . $row;

        // Set the cell value
        $sheet->setCellValue($cellCoordinate, "No hay contribuyentes para exportar");
       
       // return "No hay datos para exportar";

    } else {

    $row = 2; // Start from the first row
    foreach ($data as $rowData) {
      $colIndex = 1; // Start column index from 1 (for 'A')
      foreach ($rowData as $cellValue) {
        // Convert the numeric column index (1, 2, 3...) to a column letter (A, B, C...)
        $columnLetter = Coordinate::stringFromColumnIndex($colIndex);

        // Build the cell coordinate (e.g., A1, B1, C1, A2, etc.)
        $cellCoordinate = $columnLetter . $row;

        // Set the cell value
        $sheet->setCellValue($cellCoordinate, $cellValue);

        // Move to the next column
        $colIndex++;
      }
      // Move to the next row after processing all columns
      $row++;
    }

       for ($i = 1; $i < $colIndex; $i++) {
         $columnLetter = Coordinate::stringFromColumnIndex($i);
         $sheet->getColumnDimension($columnLetter)->setAutoSize(true);
       }

   }

    $sheet1 = $spreadsheet->createSheet();
    $sheet1->setTitle('Honorarios');
    $header1 = ['IDENTIFICADOR', 'ID', 'REVISADO', 'FECHA', 'HONORARIO', 'IMPUESTO', 'TRANSFERENCIA', 'TOTAL', 'CONCEPTO', 'OBSERVACIONES', 'CREADO', 'MODIFICADO'];
    $sheet1->fromArray($header1, null, 'A1'); // Set header row 
    
    if (empty($data1)) {
      
       $row1 = 2;
       $columnLetter1 = Coordinate::stringFromColumnIndex(1);

        // Build the cell coordinate (e.g., A1, B1, C1, A2, etc.)
        $cellCoordinate1 = $columnLetter1 . $row1;

        // Set the cell value
        $sheet1->setCellValue($cellCoordinate1, "No hay honorarios para exportar");
       
       // return "No hay datos para exportar";

    } else {

    $row1 = 2; // Start from the first row
    foreach ($data1 as $rowData1) {

      $columnLetter1 = Coordinate::stringFromColumnIndex(1);

      // Build the cell coordinate (e.g., A1, B1, C1, A2, etc.)
      $cellCoordinate1 = $columnLetter1 . $row1;

      // Set the cell value
      $sheet1->setCellValue($cellCoordinate1, $rowData1['identificador']);


      $colIndex1 = 2; // Start column index from 1 (for 'A')
      foreach ($rowData1[0] as $cellValue1) {
        // Convert the numeric column index (1, 2, 3...) to a column letter (A, B, C...)
        $columnLetter1 = Coordinate::stringFromColumnIndex($colIndex1);

        // Build the cell coordinate (e.g., A1, B1, C1, A2, etc.)
        $cellCoordinate1 = $columnLetter1 . $row1;

        // Set the cell value
        $sheet1->setCellValue($cellCoordinate1, $cellValue1);

        // Move to the next column
        $colIndex1++;
      }
      // Move to the next row after processing all columns
      $row1++;
    }

    for ($i1 = 1; $i1 < $colIndex1; $i1++) {
      $columnLetter1 = Coordinate::stringFromColumnIndex($i1);
      $sheet1->getColumnDimension($columnLetter1)->setAutoSize(true);
    }
   }


    //$filename='MNAsociados_contribuyentes_'.date('m-d-Y_hia').'.xlsx';

    // Write the file (example)
    $writer = new Xlsx($spreadsheet);

    $filename = 'contribuyentes.xls';

    $writer->save($filename);

    

    // Aquí iría la lógica para convertir el array en un archivo Excel.
    // Por simplicidad, este ejemplo solo devuelve una cadena que representa el archivo.


    return $filename;
  }

function exportarFile(string $filePath, string $fileName): ResponseInterface {
    $psr17Factory = new Psr17Factory();
    $stream = $psr17Factory->createStreamFromFile($filePath, 'r');

    

    $response = (new Response())
        ->withHeader('Content-Type', 'application/octet-stream') // Generic MIME type
        ->withHeader('Content-Disposition', sprintf('attachment; filename="%s"', $fileName))
        ->withHeader('Content-Transfer-Encoding', 'Binary')
        ->withHeader('Content-Length', (string) $stream->getSize())
        ->withBody($stream);

    return $response;
}


   public function downloadFile(string $filePath, string $filename): ResponseInterface
    {
      $factory = new Psr17Factory();
$streamFactory = $factory; // Psr17Factory implements StreamFactoryInterface
$responseFactory = $factory;

          
// 3. Create a stream from the file resource
$fileStream = $streamFactory->createStreamFromFile($filePath);

// 4. Create an HTTP response (typically 200 OK)
$response = $responseFactory->createResponse(200);

// 5. Add necessary headers to force download and set the file name
$response = $response
    ->withHeader('Content-Type', 'application/octet-stream')
    ->withHeader('Content-Disposition', 'attachment; filename="' . $filename . '"')
    ->withHeader('Content-Length', (string)filesize($filePath))
    ->withBody($fileStream);

    return $response;
       } 
}