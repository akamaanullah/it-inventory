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
                <!-- Department Filter Tabs -->
                <div class="dept-filter-bar" id="deptFilterContainer">
                    <!-- Dynamic Department Tabs Populated by JS -->
                </div>

                <!-- Employees Cards Grid -->
                <div class="employees-grid" id="employeesGridContainer">
                    <!-- Employee cards rendered dynamically by app.js -->
                </div>
            </div>
        </main>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
