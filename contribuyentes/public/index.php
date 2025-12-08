<?php

declare(strict_types = 1);

#phpinfo();
use Slim\App;

$container = require __DIR__ . '/../bootstrap.php';


$container->get(App::class)->run();


