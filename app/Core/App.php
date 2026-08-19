<?php
namespace App\Core;

class App {
    protected $controller = 'DashboardController';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $url = $this->parseUrl();
        $route = strtolower($url[0] ?? 'dashboard');

        switch ($route) {
            case 'dashboard':
            case 'index':
            case 'index.php':
            case '':
                $this->controller = 'DashboardController';
                break;
            case 'employees':
            case 'employees.php':
                $this->controller = 'EmployeeController';
                $this->method = 'index';
                break;
            case 'employee-detail':
            case 'employee_detail':
            case 'employee-detail.php':
                $this->controller = 'EmployeeController';
                $this->method = 'detail';
                break;
            case 'assets':
            case 'assets.php':
                $this->controller = 'AssetController';
                break;
            case 'backup':
            case 'backup.php':
                $this->controller = 'BackupController';
                break;
            case 'reports':
            case 'reports.php':
                $this->controller = 'ReportController';
                break;
            default:
                $this->controller = 'DashboardController';
                break;
        }

        $controllerClass = '\\App\\Controllers\\' . $this->controller;
        if (class_exists($controllerClass)) {
            $this->controller = new $controllerClass();
        } else {
            die("Controller {$controllerClass} not found.");
        }

        if (isset($url[1]) && method_exists($this->controller, $url[1])) {
            $this->method = $url[1];
            unset($url[1]);
        }

        $this->params = $url ? array_values($url) : [];
        call_user_func_array([$this->controller, $this->method], $this->params);
    }

    private function parseUrl() {
        if (isset($_GET['url'])) {
            return explode('/', filter_var(rtrim($_GET['url'], '/'), FILTER_SANITIZE_URL));
        }
        $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $scriptName = dirname($_SERVER['SCRIPT_NAME']);
        $path = str_replace($scriptName, '', $requestUri);
        $path = trim($path, '/');
        if (!empty($path)) {
            return explode('/', filter_var($path, FILTER_SANITIZE_URL));
        }
        return ['dashboard'];
    }
}
