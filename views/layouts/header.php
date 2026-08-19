<?php
// Centralized Top App Header Component
if (!isset($pageTitle)) $pageTitle = 'IT Asset Management';
if (!isset($pageSubTitle)) $pageSubTitle = 'Hardware & Asset Management Suite';
?>
<!-- Unified Top App Header Component -->
<header class="app-header" style="justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 16px;">
        <?php if (isset($backLink) && !empty($backLink)): ?>
            <a href="<?php echo $backLink; ?>" class="btn-cancel" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; padding: 6px 12px; font-size: 12px;">
                <i class="fa-solid fa-arrow-left"></i> Back
            </a>
        <?php endif; ?>
        <div>
            <h2 id="<?php echo isset($titleId) ? $titleId : 'pageHeaderTitle'; ?>" style="font-size: 20px; font-weight: 800; color: #18191d; margin-bottom: 2px;"><?php echo $pageTitle; ?></h2>
            <span class="sub-badge" id="<?php echo isset($subTitleId) ? $subTitleId : 'pageHeaderSubTitle'; ?>"><?php echo $pageSubTitle; ?></span>
        </div>
    </div>

    <div class="header-actions">
        <?php if (isset($headerActionBtn) && !empty($headerActionBtn)): ?>
            <?php echo $headerActionBtn; ?>
        <?php endif; ?>
        <button class="header-icon-btn" id="searchToggleBtn" title="Search IT Assets">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <div class="search-input-wrapper hidden" id="searchInputWrapper">
            <input type="text" id="globalAssetSearch" placeholder="Search equipment, user, specs...">
        </div>
        <div class="user-avatar-wrapper">
            <span>IT</span>
        </div>
    </div>
</header>
