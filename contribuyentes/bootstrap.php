<?php

declare(strict_types = 1);

use Dotenv\Dotenv;
use Valitron\Validator as V;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/configs/path_constants.php';



V::langDir(__DIR__ . "/vendor/vlucas/valitron/lang");
V::lang('es');

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

return require CONFIG_PATH . '/container/container.php';



