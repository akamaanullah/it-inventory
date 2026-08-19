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
                            <h3 class="card-title">All Hardware Assets Master Inventory</h3>
                            <p class="card-subtitle">Showing active assigned systems, reserve hardware, and repair logs</p>
                        </div>
                        <button class="export-stats-btn" id="fullAuditExportBtn" style="width: auto; padding: 9px 18px;">
                            <i class="fa-solid fa-file-csv"></i> Download CSV Master Sheet
                        </button>
                    </div>

                    <div class="table-responsive">
                        <table class="assets-table">
                            <thead>
                                <tr>
                                    <th class="col-center">Equipment</th>
                                    <th class="col-left">Model No & Serial</th>
                                    <th class="col-left">Technical Specs</th>
                                    <th class="col-center">Unit</th>
                                    <th class="col-right">Unit Price</th>
                                    <th class="col-center">Status</th>
                                    <th class="col-center">Full Details</th>
                                </tr>
                            </thead>
                            <tbody id="masterAssetsTableBody">
                                <!-- Populated dynamically by app.js -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- 2-Column Redesigned Add Asset Modal Dialog -->
    <div class="modal-overlay hidden" id="addAssetModal">
        <div class="modal-card" style="max-width: 640px; width: 90%;">
            <div class="modal-header">
                <div>
                    <h2 style="font-size: 20px; font-weight: 800; color: #18191d;">Add New Hardware Asset</h2>
                    <p style="font-size: 12px; color: #828795; margin-top: 2px;">Register a physical hardware item into the master inventory</p>
                </div>
                <button class="close-modal-btn" id="closeAddAssetModal">&times;</button>
            </div>
            <form id="addAssetForm">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div class="form-group">
                        <label><i class="fa-solid fa-layer-group"></i> Equipment Category</label>
                        <input type="text" id="newEquipmentType" list="equipmentCategoryList" placeholder="Select or type equipment category..." required style="width: 100%; padding: 11px 14px; border-radius: 12px; border: 1px solid #e2e8f0; font-family: inherit; font-size: 13px; outline: none; background: #ffffff;">
                        <datalist id="equipmentCategoryList">
                            <option value="LAPTOP">Laptop Computer</option>
                            <option value="DESKTOP">Desktop Workstation</option>
                            <option value="TABLET">Tablet / iPad</option>
                            <option value="MONITOR">Display / LCD Monitor</option>
                            <option value="PERIPHERAL">Keyboard / Mouse / Headset</option>
                            <option value="PRINTER / SCANNER">Printer / Scanner</option>
                            <option value="NETWORKING / ROUTER">Networking / Router / Switch</option>
                            <option value="SERVER / NAS">Server / Storage NAS</option>
                            <option value="UPS / POWER">UPS / Power Backup</option>
                            <option value="MOBILE / VOIP PHONE">Mobile / VoIP Phone</option>
                            <option value="DOCKING STATION / ADAPTER">Docking Station / Adapter</option>
                            <option value="BIOMETRIC / CCTV">Biometric / CCTV Camera</option>
                            <option value="PROJECTOR / TV">Projector / Smart TV</option>
                            <option value="OTHER">Other Hardware Asset</option>
                        </datalist>
                    </div>

                    <div class="form-group">
                        <label><i class="fa-solid fa-laptop"></i> Model Name / Number</label>
                        <input type="text" id="newModelNo" placeholder="e.g. Dell Latitude 5540" required>
                    </div>

                    <div class="form-group">
                        <label><i class="fa-solid fa-barcode"></i> Serial Number</label>
                        <input type="text" id="newSerialNo" placeholder="e.g. SN-8839211" required>
                    </div>

                    <div class="form-group">
                        <label><i class="fa-solid fa-dollar-sign"></i> Unit Price ($ USD)</label>
                        <input type="number" step="0.01" id="newUnitPrice" placeholder="e.g. 1250.00" required>
                    </div>

                    <div class="form-group">
                        <label><i class="fa-solid fa-building"></i> Office Location</label>
                        <select id="newOfficeLocation" required>
                            <option value="Head Office">Head Office</option>
                            <option value="MONEDA">MONEDA</option>
                            <option value="IT Storage">Head Office IT Storage</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label><i class="fa-solid fa-shield-halved"></i> Asset Operational Status</label>
                        <select id="newAssetStatus" required>
                            <option value="Not Assigned">Not Assigned (In IT Stock)</option>
                            <option value="Assigned">Assigned to User</option>
                            <option value="Under Repair">Under Repair</option>
                        </select>
                    </div>

                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label><i class="fa-solid fa-microchip"></i> Technical Specifications</label>
                        <textarea id="newSpecs" rows="3" placeholder="e.g. Core i7 13th Gen, 16GB DDR5 RAM, 512GB NVMe SSD, NVIDIA RTX 3050..." required style="width: 100%; padding: 11px 14px; border-radius: 12px; border: 1px solid #e2e8f0; font-family: inherit; font-size: 13px; outline: none; resize: vertical;"></textarea>
                    </div>
                </div>

                <div class="form-actions" style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 12px;">
                    <button type="button" class="btn-cancel" id="cancelAddAssetModal">Cancel</button>
                    <button type="submit" class="btn-submit"><i class="fa-solid fa-check"></i> Save Asset</button>
                </div>
            </form>
        </div>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
