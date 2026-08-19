<?php
namespace App\Controllers;

use App\Core\Controller;

class ReportController extends Controller {
    public function index() {
        $data = [
            'pageTitle' => 'Reports & Audit Analytics',
            'pageSubTitle' => 'Generate hardware inventory reports and departmental allocation audits',
            'headerActionBtn' => '<button class="export-stats-btn" id="fullAuditExportBtn" style="width: auto; padding: 9px 18px;"><i class="fa-solid fa-file-csv"></i> Download Complete Audit CSV</button>',
            'activeRoute' => 'reports'
        ];

        $this->view('reports/index', $data);
    }
}
