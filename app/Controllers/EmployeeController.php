<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\EmployeeModel;
use App\Models\AssetModel;

class EmployeeController extends Controller {
    public function index() {
        $employeeModel = new EmployeeModel();
        $departments = $employeeModel->getDepartments();

        $data = [
            'pageTitle' => 'Employee Asset Directory',
            'pageSubTitle' => "Filter by department tabs or click any employee's detail info button (ℹ️) to view allocated hardware",
            'departments' => $departments,
            'activeRoute' => 'employees'
        ];

        $this->view('employees/index', $data);
    }

    public function detail() {
        $userName = $_GET['user'] ?? 'Zain';
        $assetModel = new AssetModel();
        $userAssets = $assetModel->getAssetsByEmployee($userName);

        $data = [
            'pageTitle' => "{$userName}'s Assigned Equipment Portfolio",
            'pageSubTitle' => "Detailed hardware inventory allocated to {$userName}",
            'userName' => $userName,
            'userAssets' => $userAssets,
            'backLink' => 'employees',
            'headerActionBtn' => '<button class="btn-primary-action" id="openAssignAssetModalBtn"><i class="fa-solid fa-plus"></i> Assign New Asset</button>',
            'activeRoute' => 'employees'
        ];

        $this->view('employees/detail', $data);
    }
}
