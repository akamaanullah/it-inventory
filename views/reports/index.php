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
                <div class="main-columns">
                    <div class="left-column">
                        <div class="grid-card">
                            <div class="chart-header">
                                <div>
                                    <h3 class="chart-title">Hardware Asset Valuation & Spend Summary</h3>
                                    <p class="card-subtitle">Total financial valuation of active hardware assets per department</p>
                                </div>
                                <span class="badge-pill">Q3 Audit</span>
                            </div>
                            <div class="chart-canvas-container">
                                <canvas id="mainOrdersChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="right-column">
                        <div class="grid-card">
                            <div class="chart-header">
                                <h3 class="chart-title">Asset Deployment Share</h3>
                                <span class="badge-pill">Hardware</span>
                            </div>
                            <div class="donut-chart-container">
                                <canvas id="categoriesDonutCanvas"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
