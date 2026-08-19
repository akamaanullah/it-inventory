# 💻 Enterprise IT Asset & Hardware Management System (Custom PHP MVC)

![PHP Version](https://img.shields.io/badge/PHP-8.x%2B-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Custom%20MVC-FF3B1D?style=for-the-badge&logo=codeigniter&logoColor=white)
![Frontend](https://img.shields.io/badge/Frontend-Vanilla%20CSS%20%26%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Server](https://img.shields.io/badge/Server-XAMPP%2FApache-22C55E?style=for-the-badge&logo=apache&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A modern, high-performance **Enterprise IT Asset & Hardware Management Suite** built using a lightweight **Custom PHP Model-View-Controller (MVC) Framework**, Vanilla CSS design tokens, dynamic JavaScript interactivity, and Apache URL rewriting for clean pretty routes.

---

## 🌟 Key Features & Functional Modules

### 1. 📊 2-Column Overview Dashboard (`/dashboard`)
- **Top 3 Metric Cards**: Live audit counts (`Total Allocated Assets`, `Departments Covered`, `IT Backup Reserve Stock`) with ambient radial corner glow effects.
- **Interactive Analytics**: Chart.js bar graphs (Deployment vs Stock Balance) & Doughnut chart (Hardware Category Share).
- **Recent Allocations**: Live table showing the top 5 recent hardware deployments with direct technical specification modal drawer inspection (`ℹ️`).
- **CSV Audit Export**: Instant browser download of complete inventory datasets.

### 2. 🏢 Employees & Department Directory (`/employees`)
- **Interactive Department Tabs**: Real-time filtering across 7+ departments (`Production`, `Moneda`, `IT`, `Scrapper`, `Management`, `Finance`, `Calling Agent`) with live member count badges.
- **Top-Right Orange Ambient Glow Cards**: Custom glassmorphism employee cards displaying total allocated assets and direct links to dedicated equipment portfolios.

### 3. 🖥️ Employee Assigned Equipment Portfolio (`/employee-detail?user=Name`)
- **Dedicated Device History**: Complete tabular listing of allocated devices per employee.
- **Searchable Stock Allocation Modal**: Integrated stock lookup with dynamic datalist search (type brand, model, or serial to locate stock hardware).
- **🔄 Smart Hardware Replacement Workflow**: Toggle between *+ New Asset* and *🔄 Replace Asset*. Replacing a device automatically sets the previous asset back to `Not Assigned` (In Stock) with audit logs, and assigns the new device seamlessly.
- **Optional Remarks**: Custom allocation notes for audit tracking.

### 4. 📦 Master Hardware Assets Registry (`/assets`)
- **Comprehensive Master Sheet**: Centralized table tracking assigned, reserve, and under-repair hardware across all office locations (`Head Office`, `MONEDA`, `IT Storage`).
- **Flexible 2-Column Registration Modal**: Supports standard categories (`LAPTOP`, `DESKTOP`, `TABLET`, `MONITOR`, `PERIPHERAL`, `SERVER`, `PRINTER`, `NETWORKING`, `BIOMETRIC`, etc.) with custom category typing via `<datalist>`.
- **Automatic Icon Mapping**: Auto-assigns FontAwesome hardware icons to custom typed categories.

### 5. 🛠️ IT Backup Stock Reserve (`/backup`)
- **Spare Stock Tracking**: Live inventory sheet for reserve hardware ready for instant deployment.
- **Quick Assign Actions**: Direct modal trigger to assign backup stock items to any employee.

### 6. 📈 Reports & Audit Analytics (`/reports`)
- Financial asset valuation metrics and departmental hardware spend breakdown.

---

## 🏗️ Project Architecture & Directory Structure

This project follows a strict **Custom Model-View-Controller (MVC)** design pattern with a Front Controller router and PSR-4 style autoloader:

```
it-inventory/
├── .htaccess                   # Apache URL Rewriter (Pretty Clean Routes)
├── index.php                   # Front Controller & Autoloader Bootstrap
├── styles.css                  # Core CSS Reset, Design Tokens & Component Utility Classes
├── app.js                      # Frontend Controller, Datasets & Event Listeners
├── app/                        # Application Backend Core
│   ├── Controllers/            # MVC Controllers
│   │   ├── AssetController.php
│   │   ├── BackupController.php
│   │   ├── DashboardController.php
│   │   ├── EmployeeController.php
│   │   └── ReportController.php
│   ├── Core/                   # Framework Core Dispatcher
│   │   ├── App.php             # Router & Front Controller Engine
│   │   └── Controller.php      # Base Controller (View Renderer)
│   └── Models/                 # Data Models & Business Logic
│       ├── AssetModel.php
│       └── EmployeeModel.php
└── views/                      # Root-Level View Templates
    ├── layouts/
    │   ├── header.php          # Top App Header Component
    │   ├── sidebar.php         # Sticky Sidebar Navigation Component
    │   └── footer.php          # Shared Modals & JS Bundles
    ├── assets/
    │   └── index.php
    ├── backup/
    │   └── index.php
    ├── dashboard/
    │   └── index.php
    ├── employees/
    │   ├── detail.php
    │   └── index.php
    └── reports/
        └── index.php
```

---

## 🌐 Pretty URL Routing Table

| Clean Route | Controller | Action Method | Description |
| :--- | :--- | :--- | :--- |
| `/dashboard` | `DashboardController` | `index()` | System Overview & Top Metrics |
| `/employees` | `EmployeeController` | `index()` | Department Filter Tabs & Member Cards |
| `/employee-detail?user=Name` | `EmployeeController` | `detail()` | Employee Hardware Portfolio & Replacement Modal |
| `/assets` | `AssetController` | `index()` | Master Hardware Inventory Registry |
| `/backup` | `BackupController` | `index()` | IT Spare Reserve Stock Sheet |
| `/reports` | `ReportController` | `index()` | Audit Analytics & CSV Report Export |

---

## 🚀 Installation & XAMPP Setup Guide

### Prerequisites
- **XAMPP** or any Apache Web Server with `mod_rewrite` enabled
- **PHP 8.0+**

### Step-by-Step Deployment

1. **Clone the Repository**:
   ```bash
   cd C:\xampp\htdocs\
   git clone https://github.com/akamaanullah/it-inventory.git it-asset-managment
   ```

2. **Verify Apache Rewrite Module**:
   Ensure `mod_rewrite` is enabled in your Apache `httpd.conf`:
   ```apache
   LoadModule rewrite_module modules/mod_rewrite.so
   ```

3. **Start Apache Server**:
   Start Apache via XAMPP Control Panel.

4. **Access in Browser**:
   Open your browser and navigate to:
   ```http
   http://localhost/it-asset-managment/
   ```

---

## 🎨 Design System & Aesthetics
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Primary Color Tokens**:
  - `Brand Orange`: `#FF3B1D` / `#E02F13`
  - `Dark Charcoal`: `#18191D`
  - `Canvas Background`: `#F3F4F8`
  - `Card Background`: `#FFFFFF`
- **Iconography**: FontAwesome 6.4.0 Free Solid Icons

---

## 👨‍💻 Author & Maintainer

**Akam Aanullah**
- GitHub: [@akamaanullah](https://github.com/akamaanullah)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
