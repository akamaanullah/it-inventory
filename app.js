document.addEventListener('DOMContentLoaded', () => {
    // REAL INVENTORY DATASET
    let hardwareAssets = [
        {
            id: 'AST-001',
            assignedTo: 'Zain',
            department: 'Production',
            modelNo: 'HP Z240',
            serial: '2UA63622LH',
            specs: 'Intel xeon 16GB RAM 256 SSD NVIDIA K2200 + 500 GB HD + 500 GB SSD',
            unit: 1,
            unitPrice: 1850.00,
            assetStatus: 'Assigned',
            equipmentType: 'DESKTOP',
            iconClass: 'desktop-bg',
            icon: 'fa-desktop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/Keyboard/Headset',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-002',
            assignedTo: 'Faiz',
            department: 'IT',
            modelNo: '81LG Lenovo',
            serial: 'PF1GHM7M',
            specs: 'Core i5 8th Gen RAM 8GB SSD 240 HDD 1TB Intel 620 Display',
            unit: 1,
            unitPrice: 1250.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-003',
            assignedTo: 'Faisal',
            department: 'Production',
            modelNo: 'HP Z440',
            serial: 'SGH513RX0L',
            specs: 'Intel xeon 16 GB RAM 512 SSD 1TB HD NVIDIA QUADRO K2200',
            unit: 1,
            unitPrice: 2100.00,
            assetStatus: 'Assigned',
            equipmentType: 'DESKTOP',
            iconClass: 'desktop-bg',
            icon: 'fa-desktop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/Keyboard',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-004',
            assignedTo: 'Mahad Bukhari',
            department: 'Production',
            modelNo: 'HP 440 Workstation',
            serial: 'HLY5K02',
            specs: 'Intel R XEON 16 GB RAM 128 GB SSD 512 GB HD',
            unit: 1,
            unitPrice: 1650.00,
            assetStatus: 'Assigned',
            equipmentType: 'DESKTOP',
            iconClass: 'desktop-bg',
            icon: 'fa-desktop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/Keyboard/Headset',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-005',
            assignedTo: 'Huzaifa',
            department: 'Moneda',
            modelNo: 'Dell Latitude E5470',
            serial: 'CRTQQC2',
            specs: 'CORE i5 6th gen 8 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 850.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-006',
            assignedTo: 'SM Sami',
            department: 'Moneda',
            modelNo: 'Dell Latitude E5470',
            serial: 'DH9Y2H2',
            specs: 'CORE i5 6th gen 12 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 890.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-007',
            assignedTo: 'Mohid',
            department: 'Moneda',
            modelNo: 'Dell Latitude 5470',
            serial: '72IGVD2',
            specs: 'CORE i5 6th gen 8 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 820.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-008',
            assignedTo: 'Shayan shaikh',
            department: 'Production',
            modelNo: 'HP Z420',
            serial: 'SGH324QC0C',
            specs: 'Intel xeon 16GB RAM 256 SSD NVIDIA K2200 500 226 ssd 1tb hd',
            unit: 1,
            unitPrice: 1950.00,
            assetStatus: 'Under Repair',
            equipmentType: 'DESKTOP',
            iconClass: 'desktop-bg',
            icon: 'fa-desktop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/Keyboard/Headset',
            remarksDate: 'Power Supply Repair'
        },
        {
            id: 'AST-009',
            assignedTo: 'Abdul hadi',
            department: 'Scrapper',
            modelNo: 'Dell Latitude E5470',
            serial: 'DLVISF2',
            specs: 'CORE i5 6th gen 8 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 850.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/LCD',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-010',
            assignedTo: 'Hamza',
            department: 'Production',
            modelNo: 'Stone DH61WW',
            serial: 'PI210010024',
            specs: 'INTEL R E3 1250 16GB RAM 128 SSD 500 HD',
            unit: 1,
            unitPrice: 1400.00,
            assetStatus: 'Assigned',
            equipmentType: 'DESKTOP',
            iconClass: 'desktop-bg',
            icon: 'fa-desktop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse/Keyboard/Headset',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-011',
            assignedTo: 'Askari',
            department: 'Scrapper',
            modelNo: 'Dell Latitude E5470',
            serial: '8SH8WF2',
            specs: 'CORE i5 6th gen 8 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 850.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-012',
            assignedTo: 'Ahmed',
            department: 'Management',
            modelNo: 'DELL LATITUDE 5290 2 IN 1',
            serial: '5JMG2X2',
            specs: 'CORE i5 8th GEN 8GB+4GB RAM 256 SSD',
            unit: 1,
            unitPrice: 1150.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-013',
            assignedTo: 'Wahaj',
            department: 'Finance',
            modelNo: 'DELL LATITUDE 5501',
            serial: 'BCPSP1P2',
            specs: 'CORE i5 9th GEN 16GB RAM 500 GB M2',
            unit: 1,
            unitPrice: 1350.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'Head Office',
            attachedAssets: 'Mouse',
            remarksDate: 'Active Assigned'
        },
        {
            id: 'AST-014',
            assignedTo: 'Agent 1',
            department: 'Calling Agent',
            modelNo: 'Dell Latitude E5470',
            serial: 'HJROZF2',
            specs: 'CORE i5 6th gen 8 GB RAM 256 GB SSD',
            unit: 1,
            unitPrice: 850.00,
            assetStatus: 'Assigned',
            equipmentType: 'LAPTOP',
            iconClass: 'laptop-bg',
            icon: 'fa-laptop',
            officeLocation: 'MONEDA',
            attachedAssets: 'Mouse/Keyboard/Headset',
            remarksDate: 'charger / head phone 29-07-2025'
        }
    ];

    // IT Backup Stock Data
    let backupInventory = [
        { title: 'iPad Pro 12.9" M2', brand: 'Apple', iconClass: 'tablet-bg', icon: 'fa-tablet-screen-button', serial: 'APP-33019', stock: 12, price: 1311.00, status: 'Not Assigned', specs: 'Apple M2 Chip, 256GB, Wi-Fi 6E', officeLocation: 'Head Office IT Storage', equipmentType: 'TABLET' },
        { title: 'Logitech MX Keys & Master 3S Combo', brand: 'Logitech', iconClass: 'generic-bg', icon: 'fa-keyboard', serial: 'LOG-88102', stock: 25, price: 220.00, status: 'Not Assigned', specs: 'Wireless Ergonomic Keyboard & 8K DPI Mouse', officeLocation: 'Head Office IT Storage', equipmentType: 'PERIPHERAL' },
        { title: 'Dell Latitude 5540 Laptop', brand: 'Dell', iconClass: 'laptop-bg', icon: 'fa-laptop', serial: 'DEL-99120', stock: 5, price: 1150.00, status: 'Not Assigned', specs: 'Intel i7-1355U, 16GB RAM, 512GB SSD', officeLocation: 'Head Office IT Storage', equipmentType: 'LAPTOP' },
        { title: 'Samsung 34" Curved Ultrawide Monitor', brand: 'Samsung', iconClass: 'display-bg', icon: 'fa-tv', serial: 'SAM-34091', stock: 8, price: 699.00, status: 'Not Assigned', specs: '34" WQHD 144Hz 1ms Curved Display', officeLocation: 'Head Office IT Storage', equipmentType: 'MONITOR' }
    ];

    // Global Search Filter
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchInputWrapper = document.getElementById('searchInputWrapper');
    const globalAssetSearch = document.getElementById('globalAssetSearch');

    if (searchToggleBtn && searchInputWrapper) {
        searchToggleBtn.addEventListener('click', () => {
            searchInputWrapper.classList.toggle('hidden');
            if (!searchInputWrapper.classList.contains('hidden')) {
                globalAssetSearch.focus();
            }
        });
    }

    if (globalAssetSearch) {
        globalAssetSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('table.assets-table tbody tr');

            rows.forEach(row => {
                const textContent = row.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });

            // Also filter employee cards on employees.php if present
            const empCards = document.querySelectorAll('.employee-card');
            empCards.forEach(card => {
                const textContent = card.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    function getStatusBadge(status) {
        if (status === 'Assigned') return '<span class="status-chip badge-green">Assigned</span>';
        if (status === 'Not Assigned') return '<span class="status-chip badge-dark">Not Assigned</span>';
        if (status === 'Under Repair') return '<span class="status-chip badge-orange">Under Repair</span>';
        return `<span class="status-chip badge-dark">${status}</span>`;
    }

    // 1. Dashboard Active Deployment Table (index.php) -> Top 5 Recent Allocations Only
    const inventoryTableBody = document.getElementById('inventoryTableBody');
    if (inventoryTableBody) {
        inventoryTableBody.innerHTML = '';
        const recent5 = hardwareAssets.slice(0, 5);
        recent5.forEach(item => {
            const tr = document.createElement('tr');
            const eqChip = item.equipmentType === 'LAPTOP' ? 'chip-laptop' : 'chip-desktop';

            tr.innerHTML = `
                <td class="col-left">
                    <span class="user-name-text">${item.assignedTo}</span>
                </td>
                <td class="col-center"><span class="status-chip badge-orange">${item.department}</span></td>
                <td class="col-center"><span class="equipment-chip ${eqChip}">${item.equipmentType}</span></td>
                <td class="col-left">
                    <span class="model-text">${item.modelNo}</span>
                    <span class="serial-badge">${item.serial}</span>
                </td>
                <td class="col-left"><span class="specs-text-snippet">${item.specs}</span></td>
                <td class="col-center">
                    <button class="icon-detail-btn" onclick="openSpecDrawer('${item.id}')" title="View Full Specs">
                        <i class="fa-solid fa-info"></i>
                    </button>
                </td>
            `;
            inventoryTableBody.appendChild(tr);
        });
    }

    // 2. Hardware Master Assets Table Renderer (assets.php)
    function renderMasterAssetsTable() {
        const masterAssetsTableBody = document.getElementById('masterAssetsTableBody');
        if (!masterAssetsTableBody) return;

        masterAssetsTableBody.innerHTML = '';

        hardwareAssets.forEach(item => {
            const tr = document.createElement('tr');
            const eqChip = item.equipmentType === 'LAPTOP' ? 'chip-laptop' : 'chip-desktop';

            tr.innerHTML = `
                <td class="col-center">
                    <span class="equipment-chip ${eqChip}">${item.equipmentType}</span>
                </td>
                <td class="col-left">
                    <span class="model-text">${item.modelNo}</span>
                    <span class="serial-badge">${item.serial}</span>
                </td>
                <td class="col-left">
                    <span class="specs-text-snippet">${item.specs}</span>
                </td>
                <td class="col-center font-weight-bold">${item.unit}</td>
                <td class="col-right price-highlight">$${item.unitPrice.toFixed(2)}</td>
                <td class="col-center">${getStatusBadge(item.assetStatus)}</td>
                <td class="col-center">
                    <button class="icon-detail-btn" onclick="openSpecDrawer('${item.id}')" title="View Details">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </td>
            `;
            masterAssetsTableBody.appendChild(tr);
        });

        backupInventory.forEach(item => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td class="col-center">
                    <span class="equipment-chip chip-laptop">${item.equipmentType}</span>
                </td>
                <td class="col-left">
                    <span class="model-text">${item.title}</span>
                    <span class="serial-badge">${item.serial}</span>
                </td>
                <td class="col-left">
                    <span class="specs-text-snippet">${item.specs}</span>
                </td>
                <td class="col-center font-weight-bold">${item.stock}</td>
                <td class="col-right price-highlight">$${item.price.toFixed(2)}</td>
                <td class="col-center">${getStatusBadge('Not Assigned')}</td>
                <td class="col-center">
                    <button class="icon-detail-btn" onclick="alert('Backup Asset: ${item.title}\\nSpecs: ${item.specs}\\nStock: ${item.stock} units')" title="View Details">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </td>
            `;
            masterAssetsTableBody.appendChild(tr);
        });
    }

    renderMasterAssetsTable();

    // 3. Employees Grid & Department Filtering (employees.php)
    const employeesGridContainer = document.getElementById('employeesGridContainer');
    const deptFilterContainer = document.getElementById('deptFilterContainer');

    if (employeesGridContainer) {
        const employeeMap = {};
        hardwareAssets.forEach(item => {
            if (!employeeMap[item.assignedTo]) {
                employeeMap[item.assignedTo] = {
                    name: item.assignedTo,
                    department: item.department,
                    items: []
                };
            }
            employeeMap[item.assignedTo].items.push(item);
        });

        const employeesList = Object.values(employeeMap);

        // Render Department Tabs
        if (deptFilterContainer) {
            const deptCounts = { all: employeesList.length };
            employeesList.forEach(e => {
                deptCounts[e.department] = (deptCounts[e.department] || 0) + 1;
            });

            const depts = ['all', 'Production', 'Moneda', 'IT', 'Scrapper', 'Management', 'Finance', 'Calling Agent'];
            deptFilterContainer.innerHTML = '';

            depts.forEach(dept => {
                const count = deptCounts[dept] || 0;
                if (count > 0 || dept === 'all') {
                    const btn = document.createElement('button');
                    btn.className = `dept-tab-btn ${dept === 'all' ? 'active' : ''}`;
                    btn.setAttribute('data-dept', dept);
                    btn.innerHTML = `${dept === 'all' ? 'All Departments' : dept} <span class="tab-count">${count}</span>`;
                    
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.dept-tab-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        renderEmployeeCards(dept);
                    });

                    deptFilterContainer.appendChild(btn);
                }
            });
        }

        function renderEmployeeCards(filterDept = 'all') {
            employeesGridContainer.innerHTML = '';
            const filtered = filterDept === 'all' 
                ? employeesList 
                : employeesList.filter(e => e.department.toLowerCase() === filterDept.toLowerCase());

            if (filtered.length === 0) {
                employeesGridContainer.innerHTML = `<div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: #828795; background: #fff; border-radius: 20px;">No employees found in the <strong>${filterDept}</strong> department.</div>`;
                return;
            }

            filtered.forEach(emp => {
                const card = document.createElement('div');
                card.className = 'employee-card';
                let initials = emp.name.split(' ').map(n => n[0]).join('');

                card.innerHTML = `
                    <div class="emp-header" style="justify-content: space-between;">
                        <div style="display: flex; align-items: center; gap: 14px;">
                            <div class="emp-avatar-badge">${initials}</div>
                            <div class="emp-info">
                                <h3>${emp.name}</h3>
                                <span class="emp-dept-tag">📍 ${emp.department} Department</span>
                            </div>
                        </div>
                        <a href="employee-detail?user=${encodeURIComponent(emp.name)}" class="icon-detail-btn" title="Open Dedicated Equipment Detail Page">
                            <i class="fa-solid fa-circle-info"></i>
                        </a>
                    </div>
                    <div style="border-top: 1px solid #f0f2f5; padding-top: 14px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 12px; font-weight: 700; color: #828795; text-transform: uppercase;">TOTAL ALLOCATED ASSETS</span>
                        <span class="status-chip badge-orange" style="font-size: 12px; font-weight: 800;">${emp.items.length} Assets</span>
                    </div>
                `;
                employeesGridContainer.appendChild(card);
            });
        }

        renderEmployeeCards('all');
    }

    // 4. Employee Detail Page & Direct Searchable Assignment / Replacement Modal (employee-detail.php)
    const empDetailPageTableBody = document.getElementById('empDetailPageTableBody');
    if (empDetailPageTableBody) {
        const urlParams = new URLSearchParams(window.location.search);
        const userName = urlParams.get('user') || 'Zain';

        const assignTargetEmpName = document.getElementById('assignTargetEmpName');
        if (assignTargetEmpName) assignTargetEmpName.textContent = userName;

        function renderEmployeeDetailPage() {
            const empItems = hardwareAssets.filter(a => a.assignedTo === userName);
            const empDetailPageTitle = document.getElementById('empDetailPageTitle');
            const empDetailPageSub = document.getElementById('empDetailPageSub');

            if (empDetailPageTitle) empDetailPageTitle.textContent = `${userName}'s Assigned Equipment Portfolio`;
            if (empDetailPageSub) {
                const deptText = empItems.length > 0 ? empItems[0].department : 'General';
                const officeText = empItems.length > 0 ? empItems[0].officeLocation : 'Head Office';
                empDetailPageSub.textContent = `Department: ${deptText} | Office: ${officeText} | ${empItems.length} Allocated Hardware Devices`;
            }

            empDetailPageTableBody.innerHTML = '';
            if (empItems.length === 0) {
                empDetailPageTableBody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 24px; color: #828795;">No hardware equipment currently allocated to ${userName}. Click "+ Assign New Asset" to assign equipment.</td></tr>`;
            } else {
                empItems.forEach(item => {
                    const tr = document.createElement('tr');
                    const eqChip = item.equipmentType === 'LAPTOP' ? 'chip-laptop' : 'chip-desktop';

                    tr.innerHTML = `
                        <td class="col-center">
                            <span class="equipment-chip ${eqChip}">${item.equipmentType}</span>
                        </td>
                        <td class="col-left">
                            <span class="model-text">${item.modelNo}</span>
                            <span class="serial-badge">${item.serial}</span>
                        </td>
                        <td class="col-left">
                            <span class="specs-text-snippet">${item.specs}</span>
                        </td>
                        <td class="col-center"><span class="office-pill">${item.officeLocation}</span></td>
                        <td class="col-left"><span class="attached-assets-tag">${item.attachedAssets}</span></td>
                        <td class="col-center">
                            <button class="icon-detail-btn" onclick="openSpecDrawer('${item.id}')" title="View Full Specs & Details">
                                <i class="fa-solid fa-info"></i>
                            </button>
                        </td>
                    `;
                    empDetailPageTableBody.appendChild(tr);
                });
            }
        }

        renderEmployeeDetailPage();

        // Mode Radio Toggle Cards (NEW vs REPLACE)
        const modeNew = document.getElementById('modeNew');
        const modeReplace = document.getElementById('modeReplace');
        const cardModeNew = document.getElementById('cardModeNew');
        const cardModeReplace = document.getElementById('cardModeReplace');
        const replacementFieldsBlock = document.getElementById('replacementFieldsBlock');

        if (modeNew && modeReplace) {
            modeNew.addEventListener('change', () => {
                if (replacementFieldsBlock) replacementFieldsBlock.classList.add('hidden');
                if (cardModeNew) cardModeNew.classList.add('active-type');
                if (cardModeReplace) cardModeReplace.classList.remove('active-type');
            });
            modeReplace.addEventListener('change', () => {
                if (replacementFieldsBlock) replacementFieldsBlock.classList.remove('hidden');
                if (cardModeReplace) cardModeReplace.classList.add('active-type');
                if (cardModeNew) cardModeNew.classList.remove('active-type');
            });
        }

        // Assign Asset Modal Controls on employee-detail.php
        const assignAssetModal = document.getElementById('assignAssetModal');
        const openAssignAssetModalBtn = document.getElementById('openAssignAssetModalBtn');
        const closeAssignAssetModal = document.getElementById('closeAssignAssetModal');
        const cancelAssignAssetModal = document.getElementById('cancelAssignAssetModal');
        const stockDatalistOptions = document.getElementById('stockDatalistOptions');
        const selectStockAssetInput = document.getElementById('selectStockAssetInput');
        const selectEmpAssetToReplace = document.getElementById('selectEmpAssetToReplace');
        const assignAssetToEmpForm = document.getElementById('assignAssetToEmpForm');

        if (openAssignAssetModalBtn) {
            openAssignAssetModalBtn.addEventListener('click', () => {
                // Populate Available Stock Datalist
                if (stockDatalistOptions) {
                    stockDatalistOptions.innerHTML = '';

                    // Populate from IT Backup Stock
                    backupInventory.forEach(b => {
                        const opt = document.createElement('option');
                        opt.value = `[IT BACKUP STOCK] ${b.title} (${b.equipmentType}) - SN: ${b.serial}`;
                        stockDatalistOptions.appendChild(opt);
                    });

                    // Populate unassigned hardwareAssets
                    const unassigned = hardwareAssets.filter(a => a.assetStatus === 'Not Assigned');
                    unassigned.forEach(u => {
                        const opt = document.createElement('option');
                        opt.value = `[UNASSIGNED STOCK] ${u.modelNo} (${u.equipmentType}) - SN: ${u.serial}`;
                        stockDatalistOptions.appendChild(opt);
                    });
                }

                // Populate Employee Assets to Replace
                if (selectEmpAssetToReplace) {
                    selectEmpAssetToReplace.innerHTML = '';
                    const empItems = hardwareAssets.filter(a => a.assignedTo === userName);

                    if (empItems.length === 0) {
                        const opt = document.createElement('option');
                        opt.value = '';
                        opt.textContent = 'No current assets to replace';
                        selectEmpAssetToReplace.appendChild(opt);
                    } else {
                        empItems.forEach(item => {
                            const opt = document.createElement('option');
                            opt.value = item.id;
                            opt.textContent = `${item.modelNo} (${item.equipmentType}) - Serial: ${item.serial}`;
                            selectEmpAssetToReplace.appendChild(opt);
                        });
                    }
                }

                if (assignAssetModal) assignAssetModal.classList.remove('hidden');
            });
        }

        function closeEmpAssignModal() {
            if (assignAssetModal) assignAssetModal.classList.add('hidden');
        }

        if (closeAssignAssetModal) closeAssignAssetModal.addEventListener('click', closeEmpAssignModal);
        if (cancelAssignAssetModal) cancelAssignAssetModal.addEventListener('click', closeEmpAssignModal);

        if (assignAssetToEmpForm) {
            assignAssetToEmpForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const isReplace = modeReplace && modeReplace.checked;
                const stockInputValue = selectStockAssetInput.value;
                const assignNotes = document.getElementById('assignNotes').value || 'Standard Assignment';

                const empItems = hardwareAssets.filter(a => a.assignedTo === userName);
                const empDept = empItems.length > 0 ? empItems[0].department : 'Production';
                const empOffice = empItems.length > 0 ? empItems[0].officeLocation : 'Head Office';

                // Handle Replacement if REPLACE mode selected
                if (isReplace && selectEmpAssetToReplace.value) {
                    const oldAssetId = selectEmpAssetToReplace.value;
                    const replacementReason = document.getElementById('replacementReason').value || 'Hardware Replacement';
                    const oldAsset = hardwareAssets.find(a => a.id === oldAssetId);

                    if (oldAsset) {
                        oldAsset.assignedTo = 'Unassigned (IT Storage)';
                        oldAsset.department = 'IT';
                        oldAsset.assetStatus = 'Not Assigned';
                        oldAsset.remarksDate = `Replaced by ${stockInputValue} - Reason: ${replacementReason}`;
                    }
                }

                // Match and Assign New Stock Item
                let matchedBackup = backupInventory.find(b => stockInputValue.includes(b.serial) || stockInputValue.includes(b.title));
                let matchedStockAsset = hardwareAssets.find(a => a.assetStatus === 'Not Assigned' && (stockInputValue.includes(a.serial) || stockInputValue.includes(a.modelNo)));

                if (matchedBackup) {
                    const newAssignedAsset = {
                        id: `AST-0${hardwareAssets.length + 1}`,
                        assignedTo: userName,
                        department: empDept,
                        modelNo: matchedBackup.title,
                        serial: matchedBackup.serial,
                        specs: matchedBackup.specs,
                        unit: 1,
                        unitPrice: matchedBackup.price,
                        assetStatus: 'Assigned',
                        equipmentType: matchedBackup.equipmentType,
                        iconClass: matchedBackup.iconClass,
                        icon: matchedBackup.icon,
                        officeLocation: empOffice,
                        attachedAssets: 'Mouse/Keyboard',
                        remarksDate: assignNotes
                    };
                    hardwareAssets.unshift(newAssignedAsset);
                } else if (matchedStockAsset) {
                    matchedStockAsset.assignedTo = userName;
                    matchedStockAsset.department = empDept;
                    matchedStockAsset.assetStatus = 'Assigned';
                    matchedStockAsset.officeLocation = empOffice;
                    matchedStockAsset.remarksDate = assignNotes;
                } else {
                    // Create Custom Item from typed input
                    const newAssignedAsset = {
                        id: `AST-0${hardwareAssets.length + 1}`,
                        assignedTo: userName,
                        department: empDept,
                        modelNo: stockInputValue.replace(/\[.*?\]\s*/g, ''),
                        serial: 'SN-' + Math.floor(100000 + Math.random() * 900000),
                        specs: 'Standard Allocated IT Equipment',
                        unit: 1,
                        unitPrice: 950.00,
                        assetStatus: 'Assigned',
                        equipmentType: stockInputValue.toUpperCase().includes('LAPTOP') ? 'LAPTOP' : 'DESKTOP',
                        iconClass: 'desktop-bg',
                        icon: 'fa-desktop',
                        officeLocation: empOffice,
                        attachedAssets: 'Mouse/Keyboard',
                        remarksDate: assignNotes
                    };
                    hardwareAssets.unshift(newAssignedAsset);
                }

                renderEmployeeDetailPage();
                closeEmpAssignModal();
                assignAssetToEmpForm.reset();

                if (isReplace) {
                    alert(`Asset replacement completed for ${userName}! Previous asset returned to IT stock.`);
                } else {
                    alert(`New hardware asset successfully assigned to ${userName}!`);
                }
            });
        }
    }

    // 5. IT Backup Table Renderer (backup.php)
    const backupInventoryBody = document.getElementById('backupInventoryBody');
    if (backupInventoryBody) {
        backupInventoryBody.innerHTML = '';
        backupInventory.forEach((item) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="col-center">
                    <span class="equipment-chip chip-laptop">${item.equipmentType}</span>
                </td>
                <td class="col-left">
                    <span class="model-text">${item.title}</span>
                    <span class="serial-badge">${item.serial}</span>
                </td>
                <td class="col-left">
                    <span class="specs-text-snippet">${item.specs}</span>
                </td>
                <td class="col-center font-weight-bold" style="font-size: 14px;">${item.stock} units</td>
                <td class="col-right price-highlight">$${item.price.toFixed(2)}</td>
                <td class="col-center"><span class="office-pill">${item.officeLocation}</span></td>
                <td class="col-center">${getStatusBadge('Not Assigned')}</td>
                <td class="col-center">
                    <button class="btn-primary-action" onclick="quickAssignBackup('${item.title}')">Assign Equipment</button>
                </td>
            `;
            backupInventoryBody.appendChild(tr);
        });
    }

    window.quickAssignBackup = function(itemTitle) {
        const btn = document.getElementById('openAssignModalBtn');
        if (btn) btn.click();
        else alert(`Assigning backup stock: ${itemTitle}`);
    };

    // Tech Spec Drawer Launcher
    window.openSpecDrawer = function(assetId) {
        const asset = hardwareAssets.find(a => a.id === assetId);
        if (!asset) return;

        const specModalBody = document.getElementById('specModalBody');
        const specDetailModal = document.getElementById('specDetailModal');

        specModalBody.innerHTML = `
            <div class="item-col" style="margin-bottom: 20px;">
                <div class="asset-icon-box ${asset.iconClass}" style="width: 54px; height: 54px; font-size: 24px;">
                    <i class="fa-solid ${asset.icon}"></i>
                </div>
                <div>
                    <h3 style="font-size: 18px; font-weight: 800; color: #18191d;">${asset.modelNo} (${asset.equipmentType})</h3>
                    <span style="font-size: 12px; color: #828795;">Serial: ${asset.serial} | Status: ${asset.assetStatus}</span>
                </div>
            </div>

            <div class="spec-grid-container">
                <div class="spec-item">
                    <div class="spec-key">ASSIGNED USER</div>
                    <div class="spec-value">${asset.assignedTo} (${asset.department})</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">EQUIPMENT TYPE</div>
                    <div class="spec-value">${asset.equipmentType}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">MODEL NO</div>
                    <div class="spec-value">${asset.modelNo}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">SERIAL NUMBER</div>
                    <div class="spec-value">${asset.serial}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">UNIT COUNT</div>
                    <div class="spec-value">${asset.unit} Unit</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">UNIT PRICE</div>
                    <div class="spec-value">$${asset.unitPrice.toFixed(2)}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">OPERATIONAL STATUS</div>
                    <div class="spec-value">${asset.assetStatus}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-key">OFFICE LOCATION</div>
                    <div class="spec-value">${asset.officeLocation}</div>
                </div>
                <div class="spec-item spec-full-width">
                    <div class="spec-key">HARDWARE TECHNICAL SPECIFICATIONS</div>
                    <div class="spec-value" style="margin-top: 4px; line-height: 1.4;">${asset.specs}</div>
                </div>
            </div>
        `;

        if (specDetailModal) specDetailModal.classList.remove('hidden');
    };

    const closeSpecModal = document.getElementById('closeSpecModal');
    if (closeSpecModal) {
        closeSpecModal.addEventListener('click', () => {
            document.getElementById('specDetailModal').classList.add('hidden');
        });
    }

    // Modal Controls
    const addAssetModal = document.getElementById('addAssetModal');
    const openAddAssetModalBtn = document.getElementById('openAddAssetModalBtn');
    const closeAddAssetModal = document.getElementById('closeAddAssetModal');
    const cancelAddAssetModal = document.getElementById('cancelAddAssetModal');
    const addAssetForm = document.getElementById('addAssetForm');

    function openAddModal() {
        if (addAssetModal) addAssetModal.classList.remove('hidden');
    }

    function closeAddModal() {
        if (addAssetModal) addAssetModal.classList.add('hidden');
    }

    if (openAddAssetModalBtn) openAddAssetModalBtn.addEventListener('click', openAddModal);
    if (closeAddAssetModal) closeAddAssetModal.addEventListener('click', closeAddModal);
    if (cancelAddAssetModal) cancelAddAssetModal.addEventListener('click', closeAddModal);

    if (addAssetForm) {
        addAssetForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const equipmentType = (document.getElementById('newEquipmentType').value || 'OTHER').toUpperCase();
            const modelNo = document.getElementById('newModelNo').value;
            const serial = document.getElementById('newSerialNo').value;
            const specs = document.getElementById('newSpecs').value;
            const unitPrice = parseFloat(document.getElementById('newUnitPrice').value) || 0;
            const officeLocation = document.getElementById('newOfficeLocation').value;
            const assetStatus = document.getElementById('newAssetStatus').value;

            let iconClass = 'generic-bg';
            let icon = 'fa-microchip';
            if (equipmentType.includes('LAPTOP')) { iconClass = 'laptop-bg'; icon = 'fa-laptop'; }
            else if (equipmentType.includes('DESKTOP')) { iconClass = 'desktop-bg'; icon = 'fa-desktop'; }
            else if (equipmentType.includes('TABLET')) { iconClass = 'tablet-bg'; icon = 'fa-tablet-screen-button'; }
            else if (equipmentType.includes('MONITOR')) { iconClass = 'display-bg'; icon = 'fa-tv'; }
            else if (equipmentType.includes('PRINTER')) { iconClass = 'generic-bg'; icon = 'fa-print'; }
            else if (equipmentType.includes('NETWORK') || equipmentType.includes('ROUTER')) { iconClass = 'generic-bg'; icon = 'fa-network-wired'; }
            else if (equipmentType.includes('SERVER')) { iconClass = 'generic-bg'; icon = 'fa-server'; }

            const newAsset = {
                id: `AST-0${hardwareAssets.length + 1}`,
                assignedTo: 'Unassigned (IT Storage)',
                department: 'IT',
                modelNo: modelNo,
                serial: serial,
                specs: specs,
                unit: 1,
                unitPrice: unitPrice,
                assetStatus: assetStatus,
                equipmentType: equipmentType,
                iconClass: iconClass,
                icon: icon,
                officeLocation: officeLocation,
                attachedAssets: 'N/A',
                remarksDate: 'New Master Record'
            };

            hardwareAssets.unshift(newAsset);
            renderMasterAssetsTable();
            closeAddModal();
            addAssetForm.reset();
            alert(`New ${equipmentType} record (${modelNo}) successfully added to Master Inventory!`);
        });
    }

    // CSV Export
    function triggerCSVExport() {
        const csvData = [
            ["Equipment", "Model No & Serial", "Specs", "Unit", "Unit Price", "Status"],
            ["DESKTOP", "HP Z240 (2UA63622LH)", "Intel xeon 16GB RAM 256 SSD NVIDIA K2200", "1", "$1,850.00", "Assigned"],
            ["LAPTOP", "81LG Lenovo (PF1GHM7M)", "Core i5 8th Gen 8GB RAM 240 SSD 1TB HDD", "1", "$1,250.00", "Assigned"]
        ];

        let csvContent = "data:text/csv;charset=utf-8," + csvData.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Master_Hardware_Assets_Inventory.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const exportBtn = document.getElementById('exportBtn');
    const fullAuditExportBtn = document.getElementById('fullAuditExportBtn');
    if (exportBtn) exportBtn.addEventListener('click', triggerCSVExport);
    if (fullAuditExportBtn) fullAuditExportBtn.addEventListener('click', triggerCSVExport);

    // CHART.JS INITIALIZATIONS
    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
    Chart.defaults.color = "#828795";

    const sparklineCtx1 = document.getElementById('sparklineCanvas1');
    if (sparklineCtx1) {
        new Chart(sparklineCtx1, {
            type: 'line',
            data: {
                labels: ['1Feb', '8Feb', '16Feb', '25Feb', '30Feb'],
                datasets: [{ data: [1100, 1180, 1250, 1485, 1350], borderColor: '#ffffff', borderWidth: 2.5, tension: 0.45, fill: false }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { display: false } } }
        });
    }

    const sparklineCtx3 = document.getElementById('sparklineCanvas3');
    if (sparklineCtx3) {
        new Chart(sparklineCtx3, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{ data: [40, 25, 45, 60, 95, 45, 30], backgroundColor: ['#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#18191d', '#cbd5e1', '#cbd5e1'], borderRadius: 4, barThickness: 12 }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { display: false } } }
        });
    }

    const mainOrdersCtx = document.getElementById('mainOrdersChart');
    if (mainOrdersCtx) {
        new Chart(mainOrdersCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    { label: 'Assigned', data: [55, 45, 45, 50, 60, 25, 75, 45, 55, 70, 40, 40], backgroundColor: '#18191d', barThickness: 16 },
                    { label: 'In Stock', data: [45, 35, 55, 40, 30, 75, 25, 45, 35, 20, 50, 35], backgroundColor: '#cbd5e1', barThickness: 16 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { display: false, max: 120 } } }
        });
    }

    const donutCtx = document.getElementById('categoriesDonutCanvas');
    if (donutCtx) {
        new Chart(donutCtx, {
            type: 'doughnut',
            data: { labels: ['Laptops', 'Desktops', 'Headsets', 'Monitors'], datasets: [{ data: [35, 20, 25, 20], backgroundColor: ['#18191d', '#ff3b1d', '#cfb6a3', '#8b92a5'], borderWidth: 0 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { display: false } } }
        });
    }

    const countryCtx = document.getElementById('countryBarCanvas');
    if (countryCtx) {
        new Chart(countryCtx, {
            type: 'bar',
            data: { labels: ['ENG', 'SALES', 'OPS', 'IT', 'HR'], datasets: [{ data: [25, 22, 20, 18, 15], backgroundColor: '#18191d', borderRadius: 8, barThickness: 22 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { display: false, max: 30 } } }
        });
    }
});
