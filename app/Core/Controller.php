<?php
namespace App\Core;

class Controller {
    public function view($viewPath, $data = []) {
        extract($data);
        $viewFile = dirname(__DIR__, 2) . '/views/' . $viewPath . '.php';
        if (file_exists($viewFile)) {
            require_once $viewFile;
        } else {
            die("View file [{$viewPath}] does not exist at [{$viewFile}].");
        }
    }
}
