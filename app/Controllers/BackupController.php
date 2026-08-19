<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\AssetModel;

class BackupController extends Controller {
    public function index() {
        $assetModel = new AssetModel();
        $backupStock = $assetModel->getBackupStock();

        $data = [
            'pageTitle' => 'IT Backup Inventory & Spare Stock',
            'pageSubTitle' => 'Reserve hardware stock available for instant deployment and replacements',
            'headerActionBtn' => '<a href="assets" class="btn-primary-action" style="text-decoration: none;"><i class="fa-solid fa-boxes-stacked"></i> View Master Inventory</a>',
            'backupStock' => $backupStock,
            'activeRoute' => 'backup'
        ];

        $this->view('backup/index', $data);
    }
}
