<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\AssetModel;

class DashboardController extends Controller {
    public function index() {
        $assetModel = new AssetModel();
        $stats = $assetModel->getStats();

        $data = [
            'pageTitle' => 'IT Asset Management Suite',
            'pageSubTitle' => 'Master System Overview & Department Hardware Analytics',
            'stats' => $stats,
            'activeRoute' => 'dashboard'
        ];

        $this->view('dashboard/index', $data);
    }
}
