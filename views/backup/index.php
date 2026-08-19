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
                <div class="content-card">
                    <div class="card-header-flex">
                        <div>
                            <h3 class="card-title">Available IT Stock Reserve</h3>
                            <p class="card-subtitle">Ready hardware reserve kept in Head Office IT storage</p>
                        </div>
                        <span class="status-chip badge-green" style="font-size: 13px; font-weight: 800;">50 Total Spare Units</span>
                    </div>

                    <div class="table-responsive">
                        <table class="assets-table">
                            <thead>
                                <tr>
                                    <th class="col-center">Equipment</th>
                                    <th class="col-left">Model No & Serial</th>
                                    <th class="col-left">Technical Specs</th>
                                    <th class="col-center">Stock Qty</th>
                                    <th class="col-right">Unit Price</th>
                                    <th class="col-center">Storage Location</th>
                                    <th class="col-center">Status</th>
                                    <th class="col-center">Action</th>
                                </tr>
                            </thead>
                            <tbody id="backupInventoryBody">
                                <!-- Populated dynamically by app.js -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
