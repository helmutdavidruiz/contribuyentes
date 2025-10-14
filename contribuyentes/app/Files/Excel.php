<?php
declare(strict_types=1);

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use App\Contracts\ExcelInterface;
use \PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Entity\Contribuyente;
use Doctrine\ORM\EntityManager;
class Excel implements ExcelInterface{


public function crear(array $data):int{
// 1. Retrieve data using ORM


// 2. Generate Excel file
$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// Add headers
$sheet->setCellValue('A1', 'ID');
$sheet->setCellValue('B1', 'Nombres');
$sheet->setCellValue('C1', 'Apellidos');
$sheet->setCellValue('D1', 'RFC');
$sheet->setCellValue('E1', 'CURP');
$sheet->setCellValue('F1', 'Telefono');
$sheet->setCellValue('G1', 'Email');
$sheet->setCellValue('H1', 'Regimen Fiscal');
$sheet->setCellValue('H1', 'Tipo Declaracion');
$sheet->setCellValue('H1', 'Impuesto Obligacion');

// Populate data
$row = 2;
foreach ($data as $value) {
    $sheet->setCellValue('A' . $row, $data);
    $sheet->setCellValue('B' . $row, $data->price);
    $sheet->setCellValue('C' . $row, $data->category);
    $row++;
}

// 3. Force download
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="ProductExport.xlsx"');
header('Cache-Control: max-age=0');

$writer = new Xlsx($spreadsheet);
$writer->save('php://output');
exit;



}

}