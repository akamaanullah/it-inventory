<?php
namespace App\Models;

class AssetModel {
    private static $assets = [
        [
            'id' => 'AST-001',
            'assignedTo' => 'Zain',
            'department' => 'Production',
            'modelNo' => 'HP Z240',
            'serial' => '2UA63622LH',
            'specs' => 'Intel xeon 16GB RAM 256 SSD NVIDIA K2200 + 500 GB HD + 500 GB SSD',
            'unit' => 1,
            'unitPrice' => 1850.00,
            'assetStatus' => 'Assigned',
            'equipmentType' => 'DESKTOP',
            'officeLocation' => 'Head Office',
            'attachedAssets' => 'Mouse/Keyboard/Headset'
        ],
        [
            'id' => 'AST-002',
            'assignedTo' => 'Faiz',
            'department' => 'IT',
            'modelNo' => '81LG Lenovo',
            'serial' => 'PF1GHM7M',
            'specs' => 'Core i5 8th Gen RAM 8GB SSD 240 HDD 1TB Intel 620 Display',
            'unit' => 1,
            'unitPrice' => 1250.00,
            'assetStatus' => 'Assigned',
            'equipmentType' => 'LAPTOP',
            'officeLocation' => 'Head Office',
            'attachedAssets' => 'Mouse'
        ],
        [
            'id' => 'AST-003',
            'assignedTo' => 'Faisal',
            'department' => 'Production',
            'modelNo' => 'HP Z440',
            'serial' => 'SGH513RX0L',
            'specs' => 'Intel xeon 16 GB RAM 512 SSD 1TB HD NVIDIA QUADRO K2200',
            'unit' => 1,
            'unitPrice' => 2100.00,
            'assetStatus' => 'Assigned',
            'equipmentType' => 'DESKTOP',
            'officeLocation' => 'Head Office',
            'attachedAssets' => 'Mouse/Keyboard'
        ],
        [
            'id' => 'AST-004',
            'assignedTo' => 'Mahad Bukhari',
            'department' => 'Production',
            'modelNo' => 'HP 440 Workstation',
            'serial' => 'HLY5K02',
            'specs' => 'Intel R XEON 16 GB RAM 128 GB SSD 512 GB HD',
            'unit' => 1,
            'unitPrice' => 1650.00,
            'assetStatus' => 'Assigned',
            'equipmentType' => 'DESKTOP',
            'officeLocation' => 'Head Office',
            'attachedAssets' => 'Mouse/Keyboard/Headset'
        ]
    ];

    private static $backupStock = [
        ['title' => 'iPad Pro 12.9" M2', 'serial' => 'APP-33019', 'stock' => 12, 'price' => 1311.00, 'equipmentType' => 'TABLET', 'officeLocation' => 'Head Office IT Storage'],
        ['title' => 'Logitech MX Keys & Master 3S Combo', 'serial' => 'LOG-88102', 'stock' => 25, 'price' => 220.00, 'equipmentType' => 'PERIPHERAL', 'officeLocation' => 'Head Office IT Storage'],
        ['title' => 'Dell Latitude 5540 Laptop', 'serial' => 'DEL-99120', 'stock' => 5, 'price' => 1150.00, 'equipmentType' => 'LAPTOP', 'officeLocation' => 'Head Office IT Storage'],
        ['title' => 'Samsung 34" Curved Ultrawide Monitor', 'serial' => 'SAM-34091', 'stock' => 8, 'price' => 699.00, 'equipmentType' => 'MONITOR', 'officeLocation' => 'Head Office IT Storage']
    ];

    public function getAllAssets() {
        return self::$assets;
    }

    public function getBackupStock() {
        return self::$backupStock;
    }

    public function getAssetsByEmployee($userName) {
        return array_values(array_filter(self::$assets, function($item) use ($userName) {
            return strtolower($item['assignedTo']) === strtolower($userName);
        }));
    }

    public function getStats() {
        return [
            'totalAllocated' => 1485,
            'totalDepartments' => 7,
            'backupStockCount' => 50
        ];
    }
}
