<div align="center">

  <!-- Header Banner / Hero -->
  <p align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=ff3b1d&height=200&section=header&text=IT%20Inventory%20v1.0&fontSize=48&fontColor=ffffff&desc=Enterprise%20IT%20Asset%20%26%20Hardware%20Management%20Suite&descSize=16&descAlignY=72" width="100%" alt="IT Inventory Header Banner" />
  </p>

  <!-- Status & Tech Badges -->
  <p align="center">
    <a href="https://github.com/akamaanullah/it-inventory"><img src="https://img.shields.io/badge/Version-v1.0%20Release-ff3b1d?style=for-the-badge&logo=rocket&logoColor=white" alt="Version 1.0" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="MIT License" /></a>
    <a href="https://www.php.net/"><img src="https://img.shields.io/badge/PHP-8.0%2B-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP Version" /></a>
    <a href="https://httpd.apache.org/"><img src="https://img.shields.io/badge/Architecture-Custom%20MVC-0284c7?style=for-the-badge&logo=codeigniter&logoColor=white" alt="Custom MVC" /></a>
    <a href="https://developer.mozilla.org/"><img src="https://img.shields.io/badge/Frontend-Vanilla%20CSS%20%26%20JS-f59e0b?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" /></a>
    <a href="https://amaanullah.com"><img src="https://img.shields.io/badge/Developer-Amaanullah-84cc16?style=for-the-badge&logo=codeforces&logoColor=white" alt="Developer" /></a>
  </p>

  <p align="center">
    <strong>An enterprise-grade, high-performance IT Asset & Hardware Tracking Suite built with Custom PHP MVC, Vanilla CSS Tokens, Chart.js, and Apache URL Rewriting.</strong>
  </p>

  <!-- Quick Portfolio & Case Study Links -->
  <p align="center">
    <a href="https://amaanullah.com"><img src="https://img.shields.io/badge/Website-amaanullah.com-10b981?style=flat-square&logo=safari&logoColor=white" /></a>
    <a href="https://github.com/akamaanullah/it-inventory"><img src="https://img.shields.io/badge/IT_Inventory_Repo-181717?style=flat-square&logo=github&logoColor=white" /></a>
    <a href="https://amaanullah.com/projects/chatrox-real-time-messaging-professional-networking"><img src="https://img.shields.io/badge/ChatRox_Case_Study-0284c7?style=flat-square&logo=googlechrome&logoColor=white" /></a>
    <a href="https://amaanullah.com/projects/hrm-employee-management-payroll-portal"><img src="https://img.shields.io/badge/HRM_Portal_Case_Study-7c3aed?style=flat-square&logo=googlechrome&logoColor=white" /></a>
  </p>

</div>

<br/>

---

## 📌 Table of Contents

<div align="center">

  <p align="center">
    <a href="#-whats-new--key-highlights"><img src="https://img.shields.io/badge/⚡_WHATS_NEW-ff3b1d?style=for-the-badge" /></a>
    <a href="#-system-architecture--visual-diagrams"><img src="https://img.shields.io/badge/🏗️_ARCHITECTURE-0284c7?style=for-the-badge" /></a>
    <a href="#-core-features--modules-breakdown"><img src="https://img.shields.io/badge/🚀_MODULES-7c3aed?style=for-the-badge" /></a>
  </p>
  <p align="center">
    <a href="#-pretty-url-routing-table"><img src="https://img.shields.io/badge/🌐_ROUTING-10b981?style=for-the-badge" /></a>
    <a href="#-tech-stack--libraries"><img src="https://img.shields.io/badge/🧰_TECH_STACK-ec4899?style=for-the-badge" /></a>
    <a href="#-repository-directory-structure"><img src="https://img.shields.io/badge/📁_DIRECTORY_TREE-f59e0b?style=for-the-badge" /></a>
  </p>
  <p align="center">
    <a href="#-installation--local-setup"><img src="https://img.shields.io/badge/📦_SETUP_GUIDE-059669?style=for-the-badge" /></a>
    <a href="#-developer--contact-info"><img src="https://img.shields.io/badge/👨‍💻_DEVELOPER_INFO-6366f1?style=for-the-badge" /></a>
  </p>

</div>

<br/>

---

## ⚡ What's New & Key Highlights

- 🏢 **Department Filter Tabs**: Interactive directory tabs (`All Departments`, `Production`, `Moneda`, `IT`, `Scrapper`, `Management`, `Finance`, `Calling Agent`) with dynamic member count badges.
- 🔶 **Top-Right Orange Ambient Glow Cards**: Custom glassmorphism employee cards with a soft 270px top-right orange gradient spread covering upper 3/4ths of each card.
- 🖥️ **Dedicated Employee Equipment Portfolios**: Deep-dive user detail view (`/employee-detail?user=Name`) displaying allocated hardware, serials, specs, and attached peripherals.
- 🔍 **Searchable Stock Allocation Datalist**: Integrated live stock lookup input (`<input list="stockDatalistOptions">`) allowing instant search across IT backup stock and unassigned inventory.
- 🔄 **Smart Asset Replacement Workflow**: Toggle between `+ New Asset` and `🔄 Replace Asset`. When replacing hardware, the system automatically returns the old device to IT Stock (`Not Assigned`) with reason logs and allocates the new hardware seamlessly.
- 📦 **Master Inventory Datalist Categories**: Add Asset modal equipped with flexible category typing datalist supporting 14+ equipment types (`LAPTOP`, `DESKTOP`, `TABLET`, `MONITOR`, `PERIPHERAL`, `SERVER`, `PRINTER`, `NETWORKING`, `VOIP`, `CCTV`, etc.) with automatic icon mapping.
- 🌐 **Clean Pretty URLs**: Integrated Apache `mod_rewrite` `.htaccess` routing for clean URL endpoints without `index.php?url=` query params.
- 🏗️ **Root-Level `views/` Custom MVC Architecture**: Clean PSR-4 autoloader, Front Controller dispatcher (`app/Core/App.php`), Base Controller (`app/Core/Controller.php`), and root-level view templates (`views/`).

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 🏗️ System Architecture & Visual Diagrams

### High-Level Architecture Overview

```mermaid
graph TD
    Client[🖥️ Browser / Client Requests]

    subgraph Front_Controller [Front Controller & Routing Engine]
        HTACCESS[.htaccess Apache URL Rewriter]
        Index[index.php - Front Controller]
        Router[App/Core/App.php Router Dispatcher]
    end

    subgraph MVC_Backend [Custom PHP MVC Backend]
        Controllers[app/Controllers/ - Dashboard, Employee, Asset, Backup, Report]
        Models[app/Models/ - AssetModel, EmployeeModel]
        BaseCtrl[app/Core/Controller.php - View Renderer]
    end

    subgraph Views_Layer [Root Views Layer]
        Layouts[views/layouts/ - header.php, sidebar.php, footer.php]
        ViewTemplates[views/ - dashboard, employees, assets, backup, reports]
    end

    subgraph Frontend_Assets [Frontend Bundle]
        CSS[styles.css - Design Tokens & Orange Glow]
        JS[app.js - Datalist, Modals, Replacement & Chart.js]
    end

    Client --> HTACCESS
    HTACCESS --> Index
    Index --> Router
    Router --> Controllers
    Controllers --> Models
    Controllers --> BaseCtrl
    BaseCtrl --> Layouts
    BaseCtrl --> ViewTemplates
    ViewTemplates --> CSS
    ViewTemplates --> JS
```

### Hardware Allocation & Replacement Flow

```mermaid
sequenceDiagram
    autonumber
    actor Admin as IT Administrator
    participant Router as App/Core Router
    participant View as views/employees/detail.php
    participant JS as app.js Engine
    participant Stock as IT Stock & Employee Assets

    Admin->>Router: GET /employee-detail?user=Zain
    Router-->>View: Render Zain's Allocated Portfolio
    Admin->>View: Click "+ Assign New Asset" Button
    View->>JS: Open Allocation Modal & Populate Available Stock
    
    alt Mode: + New Asset
        Admin->>JS: Select Stock Hardware & Click Confirm
        JS->>Stock: Assign Hardware -> Status: Assigned
    else Mode: 🔄 Replace Asset
        Admin->>JS: Select Old Asset + Reason + New Stock Hardware
        JS->>Stock: Update Old Asset -> Status: Not Assigned (Returned to IT Stock)
        JS->>Stock: Update New Asset -> Status: Assigned (Allocated to Zain)
    end

    JS-->>View: Re-render Zain's Active Portfolio Table Live
```

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 🚀 Core Features & Modules Breakdown

| Module | What It Is | Tech Stack | Repository Link |
| :--- | :--- | :--- | :--- |
| **Dashboard Overview** | Live audit metrics, Chart.js deployment analytics, top 5 allocations & CSV exporter. | `PHP 8.x` `Chart.js` `CSS Tokens` | [<img src="https://img.shields.io/badge/View_Route-ff3b1d?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/dashboard) |
| **Employees Directory** | Department filter tabs (`All`, `Production`, `Moneda`, etc.) and ambient orange glow cards. | `Vanilla JS` `CSS Glassmorphism` | [<img src="https://img.shields.io/badge/View_Route-0284c7?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/employees) |
| **Employee Portfolio** | Dedicated user device list, searchable stock datalist & hardware replacement engine. | `Custom MVC` `Datalist API` | [<img src="https://img.shields.io/badge/View_Route-7c3aed?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/employee-detail?user=Zain) |
| **Master Asset Registry** | Master hardware list, 2-column registration modal & custom category datalist. | `PHP MVC` `FontAwesome 6` | [<img src="https://img.shields.io/badge/View_Route-f59e0b?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/assets) |
| **IT Backup Reserve** | Spare stock sheet for instant device allocation and replacement readiness. | `PHP 8.x` `HTML5` | [<img src="https://img.shields.io/badge/View_Route-10b981?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/backup) |
| **Audit Reports** | Financial asset valuation breakdowns and CSV report generator. | `Chart.js` `CSV Engine` | [<img src="https://img.shields.io/badge/View_Route-6366f1?style=flat-square&logo=googlechrome&logoColor=white" />](http://localhost/it-asset-managment/reports) |

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 🌐 Pretty URL Routing Table

| Clean Route | Controller | Action Method | Purpose & Function |
| :--- | :--- | :--- | :--- |
| `/dashboard` | `DashboardController` | `index()` | Overview analytics, sparklines & recent 5 allocations |
| `/employees` | `EmployeeController` | `index()` | Department tabs filter & employee card directory |
| `/employee-detail?user=Name` | `EmployeeController` | `detail()` | Dedicated employee portfolio & searchable stock modal |
| `/assets` | `AssetController` | `index()` | Master hardware asset registry & 2-column add modal |
| `/backup` | `BackupController` | `index()` | IT backup stock reserve inventory |
| `/reports` | `ReportController` | `index()` | Departmental spend analytics & CSV exporter |

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 🧰 Tech Stack & Libraries

<div align="center">

  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
  <img src="https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />

</div>

<br/>

* **Backend Engine**: PHP 8.x (Custom OOP MVC Architecture with PSR-4 Autoloading)
* **Frontend Interface**: Vanilla HTML5 • ES6 JavaScript • Vanilla CSS3 (Custom Design Tokens, HSL Colors & Orange Ambient Radial Glow)
* **Charts & Analytics**: Chart.js 4.x
* **Icons & Fonts**: Plus Jakarta Sans • FontAwesome 6.4.0

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 📁 Repository Directory Structure

```
it-inventory/
├── .htaccess                   # Apache URL Rewriter (Pretty Clean Routes)
├── index.php                   # Front Controller & Autoloader Bootstrap
├── styles.css                  # Core CSS Reset, Design Tokens & Component Utility Classes
├── app.js                      # Frontend Controller, Datasets & Event Listeners
├── app/                        # Core Application Backend (MVC)
│   ├── Controllers/            # MVC Controllers (Dashboard, Employee, Asset, Backup, Report)
│   ├── Core/                   # Router Dispatcher & Base Controller Renderer
│   └── Models/                 # Data Models (AssetModel, EmployeeModel)
└── views/                      # Root-Level View Templates
    ├── layouts/                # Header, Sidebar & Footer Shared Components
    ├── assets/                 # Master Inventory View Page
    ├── backup/                 # Backup Reserve View Page
    ├── dashboard/              # Dashboard Overview Page
    ├── employees/              # Employee Directory & Detail Pages
    └── reports/                # Audit Analytics Page
```

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 📦 Installation & Local Setup

### 1. Requirements
* Web Server (Apache with `mod_rewrite` enabled via XAMPP/WAMP/Linux)
* PHP 8.0 or higher

### 2. Deployment
Clone the repository directly into your web server document root:
```bash
cd C:\xampp\htdocs\
git clone https://github.com/akamaanullah/it-inventory.git it-asset-managment
```

### 3. Enable Apache Rewrite Module
Ensure `mod_rewrite` is active in your `httpd.conf`:
```apache
LoadModule rewrite_module modules/mod_rewrite.so
```

### 4. Run Application
Start Apache server via XAMPP Control Panel and access in your browser:
```http
http://localhost/it-asset-managment/dashboard
```

<div align="right"><a href="#-table-of-contents"><img src="https://img.shields.io/badge/⬆_BACK_TO_TOP-0f172a?style=flat-square" /></a></div>

---

## 🌐 SEO & Software Engineering Services by Amaanullah

IT Inventory is engineered as part of a high-performance web architecture showcase by **[Amaanullah](https://amaanullah.com)**, specializing in:
* **Custom Enterprise Web Applications**: PHP MVC, Laravel, Node.js, and modern full-stack web platforms.
* **Asset Tracking & ERP Systems**: Hardware lifecycle management, biometric device integrations, and automated inventory audits.
* **HRM & Workspace Automation**: Complete Human Resource Management systems, payroll processing engines, and team collaboration suites.

For technical consulting, custom software development, or enterprise web solutions, visit **[amaanullah.com](https://amaanullah.com)**.

---

## 👨‍💻 Developer & Contact Info

* **Developer Name**: Amaanullah
* **Official Website**: [https://amaanullah.com](https://amaanullah.com)
* **Primary Email**: [akamaanullah@gmail.com](mailto:akamaanullah@gmail.com)
* **Official Contact Email**: [info@amaanullah.com](mailto:info@amaanullah.com)
* **GitHub Profile**: [github.com/akamaanullah](https://github.com/akamaanullah)

---

## 📄 License
This project is released under the **[MIT License](LICENSE)**. See the [LICENSE](LICENSE) file for full details.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open an issue or pull request on [GitHub](https://github.com/akamaanullah/it-inventory).
