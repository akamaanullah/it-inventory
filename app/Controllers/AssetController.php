<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Models\AssetModel;

class AssetController extends Controller {
    public function index() {
        $assetModel = new AssetModel();
        $assets = $assetModel->getAllAssets();

        $data = [
            'pageTitle' => 'Master Hardware Assets Registry',
            'pageSubTitle' => 'Comprehensive physical hardware inventory across all company offices',
            'headerActionBtn' => '<button class="btn-primary-action" id="openAddAssetModalBtn"><i class="fa-solid fa-plus"></i> Add Hardware Asset</button>',
            'assets' => $assets,
            'activeRoute' => 'assets'
        ];

        $this->view('assets/index', $data);
    }
}
