<?php
namespace App\Models;

class EmployeeModel {
    private static $departments = [
        'All Departments',
        'Production',
        'Moneda',
        'IT',
        'Scrapper',
        'Management',
        'Finance',
        'Calling Agent'
    ];

    public function getDepartments() {
        return self::$departments;
    }
}
