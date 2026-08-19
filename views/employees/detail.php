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
            <?php 
                $titleId = 'empDetailPageTitle';
                $subTitleId = 'empDetailPageSub';
                require_once __DIR__ . '/../layouts/header.php'; 
            ?>

            <div class="page-container">
                <div class="content-card">
                    <div class="table-responsive">
                        <table class="assets-table">
                            <thead>
                                <tr>
                                    <th class="col-center">Equipment</th>
                                    <th class="col-left">Model No & Serial</th>
                                    <th class="col-left">Technical Specs</th>
                                    <th class="col-center">Office Location</th>
                                    <th class="col-left">Attached Assets</th>
                                    <th class="col-center">Action</th>
                                </tr>
                            </thead>
                            <tbody id="empDetailPageTableBody">
                                <!-- Populated dynamically by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Searchable Assign & Replacement Modal Dialog for Employee -->
    <div class="modal-overlay hidden" id="assignAssetModal">
        <div class="modal-card" style="max-width: 540px; width: 90%; max-height: 92vh; overflow-y: auto;">
            <div class="modal-header">
                <div>
                    <h2 style="font-size: 20px; font-weight: 800; color: #18191d;">Assign Asset to <span id="assignTargetEmpName">Employee</span></h2>
                    <p style="font-size: 12px; color: #828795; margin-top: 2px;">Allocate hardware stock or replace existing assigned equipment</p>
                </div>
                <button class="close-modal-btn" id="closeAssignAssetModal">&times;</button>
            </div>
            <form id="assignAssetToEmpForm">
                <!-- Sleek Single-Line Action Type Cards -->
                <div class="form-group" style="margin-bottom: 18px;">
                    <label><i class="fa-solid fa-right-left"></i> Assignment Action Type</label>
                    <div class="assign-type-toggle">
                        <label class="assign-type-card active-type" id="cardModeNew">
                            <input type="radio" name="assignMode" value="NEW" checked id="modeNew">
                            <span>+ New Asset</span>
                        </label>
                        <label class="assign-type-card" id="cardModeReplace">
                            <input type="radio" name="assignMode" value="REPLACE" id="modeReplace">
                            <span>🔄 Replace Asset</span>
                        </label>
                    </div>
                </div>

                <!-- Replacement Block (Conditional) -->
                <div id="replacementFieldsBlock" class="hidden" style="background-color: #fff7ed; border: 1px solid #ffedd5; border-radius: 16px; padding: 16px; margin-bottom: 18px;">
                    <div class="form-group" style="margin-bottom: 12px;">
                        <label style="color: #c2410c;"><i class="fa-solid fa-rotate-left"></i> Select Assigned Asset to Replace</label>
                        <select id="selectEmpAssetToReplace" style="width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid #fed7aa; font-family: inherit; font-size: 13px; background: #fff; outline: none;">
                            <!-- Populated dynamically with employee's current assets -->
                        </select>
                    </div>
                    <div class="form-group" style="margin-bottom: 0;">
                        <label style="color: #c2410c;"><i class="fa-solid fa-triangle-exclamation"></i> Reason for Replacement</label>
                        <input type="text" id="replacementReason" placeholder="e.g. Hardware Fault / System Slow / Screen Damage" style="width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid #fed7aa; font-family: inherit; font-size: 13px; outline: none;">
                    </div>
                </div>

                <!-- Searchable Available Stock Hardware -->
                <div class="form-group">
                    <label><i class="fa-solid fa-magnifying-glass"></i> Search & Select Available Stock Hardware</label>
                    <input type="text" id="selectStockAssetInput" list="stockDatalistOptions" placeholder="Type model, brand or serial to search available stock..." required style="width: 100%; padding: 11px 14px; border-radius: 12px; border: 1px solid #e2e8f0; font-family: inherit; font-size: 13px; outline: none;">
                    <datalist id="stockDatalistOptions">
                        <!-- Populated dynamically -->
                    </datalist>
                </div>

                <!-- Optional Notes / Remarks -->
                <div class="form-group">
                    <label><i class="fa-solid fa-note-sticky"></i> Assignment Notes / Remarks (Optional)</label>
                    <textarea id="assignNotes" rows="2" placeholder="e.g. Assigned for remote project work / temporary allocation..." style="width: 100%; padding: 11px 14px; border-radius: 12px; border: 1px solid #e2e8f0; font-family: inherit; font-size: 13px; outline: none; resize: vertical;"></textarea>
                </div>

                <div class="form-actions" style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 12px;">
                    <button type="button" class="btn-cancel" id="cancelAssignAssetModal">Cancel</button>
                    <button type="submit" class="btn-submit"><i class="fa-solid fa-check"></i> Confirm Assignment</button>
                </div>
            </form>
        </div>
    </div>

    <?php require_once __DIR__ . '/../layouts/footer.php'; ?>
