<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="dashboard-container">
        <?php require_once __DIR__ . '/../layouts/sidebar.php'; ?>

        <main class="main-content">
            <?php require_once __DIR__ . '/../layouts/header.php'; ?>

            <div class="page-container">
                <!-- Top 3 Metric Cards with Corner Glow -->
                <div class="metrics-grid">
                    <div class="metric-card card-dark">
                        <div class="metric-header">
                            <span class="metric-title">TOTAL ALLOCATED ASSETS</span>
                            <span class="metric-badge-dark">LIVE AUDIT</span>
                        </div>
                        <div class="metric-value-row">
                            <span class="metric-value"><?php echo number_format($stats['totalAllocated']); ?></span>
                            <span class="metric-trend positive">+12.4%</span>
                        </div>
                        <div class="metric-chart-container">
                            <canvas id="sparklineCanvas1"></canvas>
                        </div>
                    </div>

                    <div class="metric-card card-orange">
                        <div class="metric-header">
                            <span class="metric-title">DEPARTMENTS COVERED</span>
                            <span class="metric-badge"><?php echo $stats['totalDepartments']; ?> ACTIVE</span>
                        </div>
                        <div class="metric-value-row">
                            <span class="metric-value">0<?php echo $stats['totalDepartments']; ?></span>
                        </div>
                        <p class="metric-subtext" style="color: rgba(255, 255, 255, 0.9);">Production, Moneda, IT, Scrapper, Mgmt...</p>
                    </div>

                    <div class="metric-card card-white">
                        <div class="metric-header">
                            <span class="metric-title">IT BACKUP STOCK</span>
                            <span class="metric-badge-outline">READY STOCK</span>
                        </div>
                        <div class="metric-value-row">
                            <span class="metric-value"><?php echo $stats['backupStockCount']; ?> Units</span>
                            <span class="metric-trend warning">RESERVE</span>
                        </div>
                        <div class="metric-chart-container">
                            <canvas id="sparklineCanvas3"></canvas>
                        </div>
                    </div>
                </div>

                <!-- 2-Column Overview Dashboard Grid -->
                <div class="main-columns">
                    <div class="left-column">
                        <div class="grid-card">
                            <div class="chart-header">
                                <div>
                                    <h3 class="chart-title">Asset Deployment & Stock Balance</h3>
                                    <p class="card-subtitle">Monthly deployment metrics vs available backup reserve</p>
                                </div>
                                <span class="badge-pill">Annual Overview</span>
                            </div>
                            <div class="chart-canvas-container">
                                <canvas id="mainOrdersChart"></canvas>
                            </div>
                        </div>

                        <div class="content-card">
                            <div class="card-header-flex">
                                <div>
                                    <h3 class="card-title">Recent Equipment Allocations</h3>
                                    <p class="card-subtitle">Showing top 5 recent device deployments</p>
                                </div>
                                <a href="assets" class="btn-primary-action" style="text-decoration: none;">View Master Inventory</a>
                            </div>
                            <div class="table-responsive">
                                <table class="assets-table">
                                    <thead>
                                        <tr>
                                            <th class="col-left">Employee / User</th>
                                            <th class="col-center">Dept</th>
                                            <th class="col-center">Equipment</th>
                                            <th class="col-left">Model No & Serial</th>
                                            <th class="col-left">Specs</th>
                                            <th class="col-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="inventoryTableBody">
                                        <!-- Populated dynamically by JS -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="right-column">
                        <div class="grid-card">
                            <div class="chart-header">
                                <h3 class="chart-title">Category Share</h3>
                                <span class="badge-pill">Hardware</span>
                            </div>
                            <div class="donut-chart-container">
                                <canvas id="categoriesDonutCanvas"></canvas>
                            </div>
                        </div>

                        <div class="grid-card">
                            <div class="chart-header">
                                <h3 class="chart-title">Assets by Department</h3>
                                <span class="badge-pill">Units</span>
                            </div>
                            <div class="dept-bar-container">
                                <canvas id="countryBarCanvas"></canvas>
                            </div>
                            <button class="export-stats-btn" id="exportBtn">
                                <i class="fa-solid fa-file-csv"></i> Export Inventory CSV Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
