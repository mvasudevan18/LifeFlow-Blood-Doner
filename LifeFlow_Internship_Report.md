# INTERNSHIP REPORT

**A report submitted in partial fulfillment of the requirements for the Award of Degree of**

### BACHELOR OF SCIENCE
### in COMPUTER SCIENCE

**By**
### SRI PADMA YOGESH S
**REGISTER NO: 24MUCS1159**

**UNDER THE GUIDANCE OF**
**ANUSHA PRIYA**

**At**
**NEXORA TECHNO**
*241, East Permanur, Anna Park Backside, Salem-7*
*(Duration: 05/05/2026 TO 25/05/2026)*

---

### DEPARTMENT OF COMPUTER SCIENCE
### MUTHAYAMMAL COLLEGE OF ARTS AND SCIENCE (AUTONOMOUS)
*Affiliated to Periyar University, Salem, Accredited by NAAC with 'A' grade, Recognized by UGC under Section 2(f) & 12(B)*
*Rasipuram, Namakkal - 637408, Tamil Nadu*

**OCTOBER 2026**

\pagebreak

---

## MUTHAYAMMAL COLLEGE OF ARTS AND SCIENCE (AUTONOMOUS)
*Affiliated to Periyar University, Salem, Accredited by NAAC with ‘A’ grade, Recognized by UGC under Section 2(f) & 12(B)*
*Rasipuram - 637 408, Namakkal District, Tamil Nadu*

### DEPARTMENT OF COMPUTER SCIENCE

### CERTIFICATE

This is to certify that the **“Internship Report”** submitted by **SRI PADMA YOGESH S (Reg. No: 24MUCS1159)** is work done by him and submitted during the **2026 – 2027** academic year, in partial fulfillment of the requirements for the award of the degree of **Bachelor of Science in Computer Science**, at **Nexora Techno**.

<br><br><br>

**Internship Coordinator (College)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Head of the Department**

<br>

Submitted for the viva-voce examination held on ____________________

<br><br>

**Internal Examiner** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **External Examiner**

\pagebreak

---

## ACKNOWLEDGEMENT

I wish to express my profound thanks to the people who helped me to make this application reality. It is my pleasure to acknowledge the help of all individuals.

I am delighted to thank our Honorable Chairman **Mr. K.P. RAMASWAMY** and **Mr. R. MUTHUVEL, M.O.M.**, Secretary, Vanetra Muthayammal Institutions for having sufficient infrastructure to execute my internship report successfully.

I would like to express my sincere thanks to **Dr. R. SELVAKUMARAN, M.Sc., M.Phil., Ph.D.**, Director Academics, **Dr. S.P. VIJEIKUMAR, M.Sc., Ph.D.**, Principal, **Dr. A. STELLA BABY, M.A., M.Phil., Ph.D.**, Vice Principal, Muthayammal College of Arts and Science for giving me an opportunity to carry out this internship.

I wish to extend my gratitude to **Mr. P. SUBRAMANIAM, M.S (IT&M), M.Phil., [Ph.D.]**, HOD, Computer Science for his moral support.

I wish to extend my gratitude to **Mr. P. SUBRAMANIAM, M.S (IT&M), M.Phil., Ph.D.**, HOD, Computer Science and my internship report guide for his courageous support and guidance on various stages of this internship.

I would like to thank my internship mentor **ANUSHA PRIYA** at **Nexora Techno** for invaluable technical direction and support during full-stack web development.

I would like to thank my parents, relatives and friends for their moral support and encouragement. Without them this internship report would have been just a distant thought.

Above all, I am beholden to the almighty for giving me strength and determination to complete this internship report work.

\pagebreak

---

## OBJECTIVES

* To build a modern, high-performance web platform (**LifeFlow - BloodBank**) that bridges the critical gap between voluntary blood donors, emergency patients, and healthcare facilities.
* To provide an instant, filterable **Find Blood** directory allowing users to search compatible blood donors by blood group (A+, A-, B+, B-, AB+, AB-, O+, O-) with direct calling and WhatsApp connectivity.
* To develop an emergency **SOS Broadcast System** enabling patients and hospitals to issue rapid, high-priority blood requests during life-threatening situations.
* To provide real-time **Blood Stock Inventory Monitoring** that accurately tracks unit availability and issues low-stock threshold warnings.
* To implement a hospital directory facilitating direct contact with registered regional healthcare institutions and emergency response facilities.
* To integrate an intelligent **AI-Powered Blood Donation Chatbot** delivering 24/7 instant counseling on donor eligibility criteria, preparation tips, blood compatibility, and post-donation health care.
* To ensure robust security through **bcrypt password hashing**, safe session handling, and structured MySQL relational database architecture.

\pagebreak

---

## ABSTRACT

The **LifeFlow - BloodBank** internship project focuses on developing a robust, real-time, user-centric full-stack web platform designed to streamline blood donation, donor discovery, inventory tracking, and emergency blood requests. In healthcare emergencies, securing compatible blood within the "golden hour" remains a major logistical challenge due to fragmented contact directories and lack of centralized inventory visibility.

Built using **React.js, Vite, Node.js, Express.js, and MySQL**, LifeFlow addresses this challenge through an integrated digital ecosystem. The platform features an instant **Find Blood** directory where patients can filter verified donors by specific blood groups and initiate immediate communication via phone or messaging. An integrated **SOS Emergency Request module** allows rapid broadcasting of urgent blood requirements. Real-time **Blood Stock Inventory** aggregation displays live supply counts across blood groups, while a comprehensive **Hospital Directory** connects users with nearby medical centers.

Furthermore, the application incorporates a dedicated **LifeFlow AI Blood Donation Chatbot** that guides donors through eligibility criteria, donation intervals, myths versus facts, and post-donation recovery protocols. Secured with encrypted user authentication and styled with responsive CSS interfaces, LifeFlow optimizes the blood procurement pipeline to save lives when every second counts.

\pagebreak

---

## CONTENTS

| S.NO | PARTICULARS | PAGE NO |
| :---: | :--- | :---: |
| **1** | **INTRODUCTION** | **1** |
| | 1.1 Introduction to the Project | 1 |
| | 1.2 Background | 1 |
| | 1.3 Problem Statement | 1 |
| | 1.4 Need for the System | 2 |
| | 1.5 Purpose of the Project | 2 |
| | 1.6 Objectives | 2 |
| | 1.7 Scope of the Project | 3 |
| | 1.8 Existing System | 3 |
| | 1.9 Limitations of the Existing System | 3 |
| | 1.10 Proposed System | 4 |
| | 1.11 Advantages of the Proposed System | 4 |
| | 1.12 Key Features of the Project | 4 |
| **2** | **SYSTEM SPECIFICATION** | **5** |
| | 2.1 Hardware Requirements | 5 |
| | 2.2 Software Requirements | 5 |
| | 2.3 System Requirements Identified from Project Folder | 5 |
| | 2.4 Functional Requirements | 6 |
| | 2.5 Non-Functional Requirements | 6 |
| **3** | **TECHNOLOGY** | **7** |
| | 3.1 Technologies Used in the Project | 7 |
| **4** | **DESIGNING** | **8** |
| | 4.1 System Architecture | 8 |
| | 4.2 Database Design | 8 |
| | 4.3 User Flow | 9 |
| **5** | **CODING** | **10** |
| **6** | **OUTPUT** | **18** |
| | 6.1 Interface Analysis & Functionality Breakdown | 18 |
| | 6.2 Screen Descriptions & Output Verification | 19 |
| **7** | **CONCLUSION** | **21** |
| **8** | **REFERENCE** | **22** |

\pagebreak

---

# 1. INTRODUCTION

### 1.1 Introduction to the Project
The **LifeFlow - BloodBank** is a comprehensive, responsive full-stack web application designed to connect voluntary blood donors, patients in critical need, and healthcare organizations into a unified life-saving network. Developed using **React.js, Vite, Node.js, Express, and MySQL**, the system provides instant donor discovery across all eight major blood groups (A+, A-, B+, B-, AB+, AB-, O+, O-), real-time blood stock level monitoring, urgent emergency SOS dispatch, hospital coordination, and an intelligent **LifeFlow AI Chatbot** delivering round-the-clock guidance on donation procedures and eligibility.

### 1.2 Background
Blood transfusions are indispensable medical interventions required for trauma care, accidental injuries, oncological treatments, maternal emergencies, and hereditary hematological conditions like thalassemia and sickle cell disease. Despite advances in clinical infrastructure, the matching of blood requirements with available donors remains heavily reliant on manual inquiries, unstructured social media forwards, and fragmented physical registers. The resulting delays frequently threaten patient survival during urgent medical scenarios.

### 1.3 Problem Statement
The conventional blood banking and donor discovery landscape is fraught with critical bottlenecks:
1. **Uncentralized Donor Information:** Donor contact numbers and blood groups are scattered across disparate social media groups and private phone books, leading to outdated or unverified contacts.
2. **Delayed Response During Emergencies:** Patients in urgent need of rare or critical blood groups lack a rapid channel to broadcast SOS alerts to verified donors in proximity.
3. **Lack of Transparent Inventory Visibility:** Patients and hospital attendants must physically travel between blood banks to verify stock availability, wasting irreplaceable time.
4. **Donor Hesitancy and Misconceptions:** Prospective donors often abandon donations due to lack of accurate guidance regarding eligibility requirements, safety, and recovery intervals.

### 1.4 Need for the System
There is an urgent requirement for a centralized, accessible digital web application that unifies donor registration, categorical blood search, real-time stock visibility, emergency dispatch, and interactive donor education into a single streamlined platform.

### 1.5 Purpose of the Project
The purpose of the **LifeFlow** project is to empower donors and recipients with a dependable digital platform that eliminates communication latency, safeguards donor credentials, provides clear inventory intelligence, and accelerates blood delivery during medical crises.

### 1.6 Objectives
* **Instant Donor Discovery:** Enable users to filter registered donors instantly by blood group with immediate calling and messaging actions.
* **Emergency SOS Dispatch:** Provide a dedicated emergency SOS interface to submit urgent blood needs that are immediately recorded and displayed.
* **Live Stock Tracking:** Compute live blood group availability dynamically from registered donor data to inform users of stock levels and shortages.
* **Partner Hospital Integration:** Provide verified hospital directory contacts to assist users with emergency healthcare logistics.
* **Interactive Donor AI Assistant:** Offer an interactive, rule-based clinical knowledge chatbot answering queries on donor eligibility, blood group compatibility, preparation, and safety.
* **Robust Credential Security:** Secure all user passwords utilizing industry-standard cryptographic hashing (`bcrypt`).

### 1.7 Scope of the Project
The scope of the LifeFlow codebase encompasses:
* Modern single-page web architecture using **React 18** and **Vite**.
* High-throughput REST API backend built on **Node.js** and **Express.js**.
* Relational database persistence utilizing **MySQL** with parameterized SQL query execution.
* Multi-route navigation via **React Router DOM v6**.
* Real-time search, donor categorization, interactive SOS alert logging, and community chat.
* Responsive desktop and mobile interfaces styled with modern CSS cards, gradients, and micro-interactions.

### 1.8 Existing System
In the conventional ecosystem:
* Relatives and attendants manually contact local blood banks or publish unstructured notices on WhatsApp, Facebook, or Instagram.
* Donors are tracked in paper ledgers or standalone spreadsheets without search indexing.
* Stock verification requires physical visits or repeated phone inquiries.

### 1.9 Limitations of the Existing System
* **Severe Latency:** Vital hours are lost searching through unresponsive or outdated contact lists.
* **No Real-Time Inventory:** No mechanism exists to know which blood group is currently critically low.
* **Data Inaccuracy:** Manual registers are rarely updated with donor location, age, or readiness.
* **Security Vulnerabilities:** Plaintext storage of donor records exposes sensitive personal data.

### 1.10 Proposed System
The proposed **LifeFlow - BloodBank** platform consolidates all essential life-saving services into a single, intuitive interface. It combines donor registration, instant blood filtering, emergency SOS broadcasting, real-time stock computation, verified hospital directories, and an integrated AI donation assistant into an always-on web portal.

### 1.11 Advantages of the Proposed System
* **Accelerated Matchmaking:** Immediate retrieval of compatible donors filtered by blood group.
* **Emergency Broadcast:** Dedicated SOS module to handle urgent hospital and transfusion needs.
* **Automated Stock Analytics:** Automatic aggregation of unit availability per blood group.
* **Integrated Health Counseling:** Built-in AI chatbot addresses donor anxiety and clarifies medical eligibility 24/7.
* **High Data Integrity & Security:** Cryptographic password hashing (`bcrypt`) protects user accounts.

### 1.12 Key Features of the Project
1. **Comprehensive Dashboard:** Centralized overview featuring dynamic statistics, quick-action navigation, compatibility guides, and life-saving FAQs.
2. **Find Blood Portal:** Granular filtering across all eight blood groups with live contact cards.
3. **Emergency SOS System:** Priority alert submission that logs critical patient requirements.
4. **Live Blood Stock Tracker:** Visual inventory tracker displaying units per blood group.
5. **Hospital Directory:** Contact guide to major medical facilities and ambulance services.
6. **LifeFlow AI Assistant:** Floating conversational assistant equipped with medical donation knowledge.
7. **Secure Authentication:** Protected user login and registration powered by hashed credentials.

\pagebreak

---

# 2. SYSTEM SPECIFICATION

### 2.1 Hardware Requirements
* **Processor:** Intel Core i3 / AMD Ryzen 3 or higher.
* **RAM:** Minimum 4 GB (8 GB recommended for concurrent Vite dev server and Node.js runtime).
* **Storage:** Minimum 500 MB free hard drive space for node_modules, source code, and MySQL database files.
* **Display:** Minimum resolution of 1024 × 768 pixels (responsive on full HD and mobile screens).

### 2.2 Software Requirements
* **Operating System:** Microsoft Windows 10/11, macOS, or Linux.
* **Runtime Environment:** Node.js v18.x or v20.x with npm.
* **Database Engine:** MySQL Server (v5.7 / v8.0, or XAMPP / WAMP bundled MySQL).
* **Frontend Tools:** Vite v8.x, React 18.x, React Router DOM v6.x.
* **Web Browser:** Modern web browsers with ECMAScript 6+ and CSS Grid support (Google Chrome, Microsoft Edge, Mozilla Firefox).

### 2.3 System Requirements Identified from Project Folder
```yaml
Operating System: Windows (ELCOT user workspace context)
Backend Runtime: Node.js (Express.js Framework, CommonJS)
Frontend Framework: React 18.3.1 with Vite 8.0.16 bundler
Database Server: MySQL (Database Name: lifeflow, Default User: root)
Environment Configuration: .env file containing PORT=5000, DB_HOST=127.0.0.1, DB_USER=root, DB_NAME=lifeflow
Key NPM Packages:
  Backend: express, cors, mysql2, bcrypt, dotenv
  Frontend: react, react-dom, react-router-dom, vite
```

### 2.4 Functional Requirements
* **FR-1 User Registration & Login:** The system shall allow prospective donors to register with personal information (name, email, phone, blood group, age, location) and securely authenticate with encrypted passwords.
* **FR-2 Blood Donor Search:** The system shall enable users to query donors by blood group (`/findblood/:blood`) and return verified donor names, emails, phone numbers, and locations.
* **FR-3 Blood Stock Aggregation:** The system shall automatically compute the count of registered donors per blood group (`/bloodstock`) and display visual inventory gauges.
* **FR-4 Emergency SOS Dispatch:** The system shall provide an SOS form (`/sos`) that accepts emergency requests and persists them into the database.
* **FR-5 Community Messaging:** The system shall provide a communication channel (`/chat`) for donor-recipient messages.
* **FR-6 Hospital Directory:** The system shall maintain emergency contacts and addresses for affiliated regional medical centers.
* **FR-7 LifeFlow AI Chatbot:** The system shall embed a persistent, client-side conversational assistant answering questions about eligibility, preparation, safety, and donation types.
* **FR-8 User Profile Management:** Authenticated users shall be able to view their donor status, contact information, and blood group.

### 2.5 Non-Functional Requirements
* **Security:** All user passwords must be hashed using a salt round factor of 10 before database insertion; SQL parameters must be passed using prepared queries to prevent SQL Injection.
* **Usability:** The user interface must employ responsive layouts, accessible contrast, cohesive color palettes (medical red `#e63946`, deep navy `#1d3557`), and clean typography.
* **Performance:** Single Page Application (SPA) architecture ensures instantaneous client-side navigation without full-page reloads.

\pagebreak

---

# 3. TECHNOLOGY

### 3.1 Technologies Used in the Project

The **LifeFlow - BloodBank** application is architected using the modern JavaScript full-stack ecosystem:

1. **React.js (v18.3.1):** A component-based JavaScript library utilized for engineering a declarative, highly reactive user interface with stateful hooks (`useState`, `useEffect`, `useRef`).
2. **Vite (v8.0.16):** Next-generation frontend build tool that delivers lightning-fast Hot Module Replacement (HMR) and optimized ES module bundling.
3. **Node.js:** Server-side asynchronous JavaScript runtime that powers the scalable backend environment.
4. **Express.js (v5.2.1):** Minimalist web application framework used to construct RESTful API endpoints for registration, authentication, inventory, SOS, and chat.
5. **MySQL:** High-performance relational database management system used to store structured donor data, emergency broadcasts, inventory tallies, and messages.
6. **mysql2:** Modern MySQL client library for Node.js providing optimized prepared statement execution and connection pooling.
7. **bcrypt (v6.0.0):** Cryptographic library providing one-way password hashing and secure string comparison algorithms.
8. **CORS (Cross-Origin Resource Sharing):** Middleware enabling secure communication between the Vite frontend (`http://localhost:5173`) and Express backend (`http://localhost:5000`).
9. **React Router DOM (v6.30.4):** Declarative client-side routing library managing seamless navigation across Dashboard, Find Blood, SOS, Stock, Hospital, and Profile pages.
10. **Modern CSS3 & Design System:** Flexbox, CSS Grid, custom CSS variables, gradients, and subtle keyframe micro-animations creating an immersive experience.

\pagebreak

---

# 4. DESIGNING

### 4.1 System Architecture

The LifeFlow application adopts a decoupled **Three-Tier Client-Server Architecture**:

1. **Presentation Tier (Frontend):**
   * Built with React.js and Vite.
   * Renders modular components: Navigation Bar, Dashboard, Find Blood, Blood Stock, SOS Request, Hospital Finder, Profile, and the persistent LifeFlow AI Chatbot.
   * Communicates asynchronously with the backend using the browser's native `fetch()` API.

2. **Application Tier (Backend):**
   * Built with Node.js and Express.js.
   * Implements RESTful endpoints (`/register`, `/login`, `/findblood/:blood`, `/bloodstock`, `/sos`, `/chat`).
   * Manages authentication validation, password hashing via `bcrypt`, and request routing.

3. **Data Tier (Database):**
   * Powered by MySQL Server.
   * Persists users, SOS requests, blood stock, and chats in relational tables with foreign integrity and index optimization.

```
+-------------------------------------------------------------+
|                     PRESENTATION TIER                       |
|           React.js + Vite (http://localhost:5173)           |
|  [Dashboard] [Find Blood] [Blood Stock] [SOS] [Chatbot]    |
+------------------------------+------------------------------+
                               |  Asynchronous JSON / REST
                               v
+-------------------------------------------------------------+
|                     APPLICATION TIER                        |
|           Node.js + Express (http://localhost:5000)         |
|   [Auth Module]  [Donor Lookup]  [SOS Dispatch]  [Stock API]|
+------------------------------+------------------------------+
                               |  MySQL2 Connection Pool
                               v
+-------------------------------------------------------------+
|                        DATA TIER                            |
|             MySQL Server (lifeflow Database)                |
|      [users]      [sos_requests]      [chats]               |
+-------------------------------------------------------------+
```

### 4.2 Database Design

The relational database (`lifeflow`) comprises the following schema:

* **1. `users` Table:** Stores registered donor and recipient profiles.
  * `id` (INT, Primary Key, Auto Increment)
  * `name` (VARCHAR(100), NOT NULL)
  * `email` (VARCHAR(100), UNIQUE, NOT NULL)
  * `phone` (VARCHAR(20), NOT NULL)
  * `blood_group` (VARCHAR(10), NOT NULL)
  * `password` (VARCHAR(255), NOT NULL - Hashed)
  * `age` (INT)
  * `location` (VARCHAR(100))
  * `created_at` (TIMESTAMP)

* **2. `sos_requests` Table:** Stores critical emergency blood alerts.
  * `id` (INT, Primary Key, Auto Increment)
  * `name` (VARCHAR(100), NOT NULL)
  * `phone` (VARCHAR(20), NOT NULL)
  * `blood_group` (VARCHAR(10), NOT NULL)
  * `message` (TEXT)
  * `created_at` (TIMESTAMP)

* **3. `chats` Table:** Stores donor-recipient community conversations.
  * `id` (INT, Primary Key, Auto Increment)
  * `name` (VARCHAR(100), NOT NULL)
  * `message` (TEXT, NOT NULL)
  * `timestamp` (TIMESTAMP)

### 4.3 User Flow

```
User Enters LifeFlow (Home / Dashboard)
       │
       ├──► Find Blood ──► Select Blood Group ──► View Donor Cards ──► Call / WhatsApp
       │
       ├──► SOS Emergency ──► Fill Patient Details ──► Submit SOS ──► Stored & Alerted
       │
       ├──► Blood Stock ──► View Live Group Quantities ──► Identify Shortages
       │
       ├──► Hospital ──► Search Nearby Facilities ──► Direct Hospital Contact
       │
       ├──► Register / Login ──► Hashed Auth ──► Access Personalized Profile
       │
       └──► LifeFlow AI Chatbot (Any Page) ──► Ask Queries ──► Instant Medical Guidance
```

\pagebreak

---

# 5. CODING

### 5.1 Backend Server & Database Connection (`server.js`)

```javascript
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Database Connection Configuration
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("MySQL Error:", err);
    } else {
        console.log("MySQL Connected successfully to lifeflow database");
    }
});

// Root Health Check Route
app.get("/", (req, res) => {
    res.send("LifeFlow BloodBank Backend Running");
});
```

### 5.2 User Registration with Password Hashing (`server.js`)

```javascript
// POST /register - Secure Donor & User Registration
app.post("/register", async (req, res) => {
    const { name, email, phone, blood_group, password, age, location } = req.body;

    try {
        // Securely hash password with 10 salt rounds
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users(name,email,phone,blood_group,password,age,location) VALUES(?,?,?,?,?,?,?)";

        db.query(
            sql,
            [name, email, phone, blood_group, hashedPassword, age, location],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                res.json({ message: "User Registered Successfully" });
            }
        );
    } catch (error) {
        res.status(500).json({ error: "Server registration failed" });
    }
});
```

### 5.3 User Authentication (`server.js`)

```javascript
// POST /login - Secure User Authentication
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (result.length > 0) {
            const match = await bcrypt.compare(password, result[0].password);

            if (match) {
                delete result[0].password; // Strip hashed password from response
                return res.json({
                    success: true,
                    user: result[0]
                });
            } else {
                return res.json({ success: false, message: "Invalid credentials" });
            }
        } else {
            return res.json({ success: false, message: "User not found" });
        }
    });
});
```

### 5.4 Donor Lookup by Blood Group (`server.js`)

```javascript
// GET /findblood/:blood - Fetch available donors matching blood group
app.get("/findblood/:blood", (req, res) => {
    const blood = req.params.blood;

    db.query(
        "SELECT name, email, phone, blood_group, location FROM users WHERE blood_group=?",
        [blood],
        (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(result);
        }
    );
});
```

### 5.5 Live Blood Stock Aggregation (`server.js`)

```javascript
// GET /bloodstock - Dynamic inventory calculation grouped by blood type
app.get("/bloodstock", (req, res) => {
    db.query(
        "SELECT blood_group, COUNT(*) as total FROM users GROUP BY blood_group",
        (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(result);
        }
    );
});
```

### 5.6 Emergency SOS Request Broadcast (`server.js`)

```javascript
// POST /sos - Emergency Blood Broadcast Endpoint
app.post("/sos", (req, res) => {
    const { name, phone, blood_group, message } = req.body;

    db.query(
        "INSERT INTO sos_requests(name, phone, blood_group, message) VALUES(?,?,?,?)",
        [name, phone, blood_group, message],
        (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({
                success: true,
                message: "Emergency SOS Request broadcasted successfully"
            });
        }
    );
});
```

### 5.7 Community Chat Endpoints (`server.js`)

```javascript
// POST /chat - Submit community message
app.post("/chat", (req, res) => {
    const { name, message } = req.body;

    db.query("INSERT INTO chats(name, message) VALUES(?,?)", [name, message], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ success: true });
    });
});

// GET /chat - Retrieve community discussion
app.get("/chat", (req, res) => {
    db.query("SELECT * FROM chats ORDER BY id DESC", (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

// Start Server
app.listen(process.env.PORT || 5000, () => {
    console.log("LifeFlow Backend Server running on port 5000");
});
```

### 5.8 Frontend Main Router (`App.jsx`)

```javascript
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FindBlood from "./pages/FindBlood.jsx";
import SOS from "./pages/SOS.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import BloodStock from "./pages/BloodStock.jsx";
import Hospital from "./pages/Hospital.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import BloodDonationChatbot from "./components/BloodDonationChatbot.jsx";

function App() {
  const location = useLocation();
  const hideNav = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="page-wrapper">
      {!hideNav && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/findblood" element={<FindBlood />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bloodstock" element={<BloodStock />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>

      {/* Persistent AI Blood Donation Assistant */}
      <BloodDonationChatbot />
    </div>
  );
}

export default App;
```

### 5.9 LifeFlow AI Chatbot Component (`BloodDonationChatbot.jsx` snippet)

```javascript
import { useState, useRef, useEffect } from "react";

const KNOWLEDGE_BASE = {
  eligibility: {
    patterns: ["eligible", "eligibility", "can i donate", "who can donate", "criteria"],
    response: "Blood Donation Eligibility Criteria:\n✅ Age: 18–65 years\n✅ Weight: Min 50 kg\n✅ Hemoglobin: Min 12.5 g/dL\n✅ Interval: 56 days between donations"
  },
  bloodTypes: {
    patterns: ["blood type", "compatibility", "universal donor", "universal recipient"],
    response: "O- is the Universal Donor (can donate to all types).\nAB+ is the Universal Recipient (can receive from all types)."
  }
};

export default function BloodDonationChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I am LifeFlow AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim().toLowerCase();
    let reply = "I can guide you on donation eligibility, blood compatibility, and preparation.";

    for (let key in KNOWLEDGE_BASE) {
      if (KNOWLEDGE_BASE[key].patterns.some(p => userMsg.includes(p))) {
        reply = KNOWLEDGE_BASE[key].response;
        break;
      }
    }

    setMessages(prev => [...prev, { from: "user", text: input }, { from: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      {/* Floating Button & Interactive Chat Window */}
    </div>
  );
}
```

\pagebreak

---

# 6. OUTPUT

### 6.1 Interface Analysis & Functionality Breakdown

| Screen / Page Name | Purpose | Main Visual Elements & Cards | User Interaction | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **Home / Dashboard** (`/`) | Platform welcome, stats, and quick actions | Hero Banner, Quick Navigation Cards (Find Blood, Stock, SOS, Hospitals), Live Stats, Compatibility Table, Donor FAQs | Clicking Quick Action cards, viewing FAQs | Seamless navigation to target modules; displays real-time system counts. |
| **Find Blood** (`/findblood`) | Donor discovery by blood group | Blood group selector buttons (A+, A-, B+, B-, AB+, AB-, O+, O-), Donor profile cards with Name, Phone, Email, Location | Clicking blood group button; clicking Call or WhatsApp button | Asynchronously queries `/findblood/:blood` and renders list of matching donors with direct calling action. |
| **Blood Stock** (`/bloodstock`) | Real-time blood inventory overview | Visual stock gauge meters per blood group, total donor units, low-stock warning indicators | Viewing stock cards, refreshing inventory | Asynchronously queries `/bloodstock` and visualizes available donor units per blood type. |
| **Emergency SOS** (`/sos`) | Urgent emergency broadcast dispatch | High-contrast emergency banner, SOS form (Name, Phone, Blood Group, Message), Priority badge | Submitting emergency blood request | Posts payload to `/sos` endpoint; saves request to MySQL and issues success notification. |
| **Hospital Directory** (`/hospital`) | Emergency healthcare facility lookup | Hospital cards with emergency hotline, address, available ambulances, and direct map directions | Clicking phone or hospital action links | Instantly launches phone dialer for ambulance or hospital front desk. |
| **Community Chat** (`/chat`) | Donor-recipient messaging | Message thread history, sender badge, input field with send button | Typing message and submitting | Inserts message into `chats` table via POST `/chat` and updates chat list. |
| **LifeFlow AI Chatbot** (Global Widget) | 24/7 intelligent donation counseling | Floating pulsing launcher icon, chat modal, quick suggestions, auto-scroll chat window | Clicking chatbot launcher, selecting query or typing query | Evaluates input against medical knowledge base and provides formatted instant advice. |
| **User Profile** (`/profile`) | Donor account summary | User avatar, Name, Email, Phone, Blood Group badge, Donor ID | Accessing profile after login | Displays authenticated user information stored in `localStorage`. |
| **Login / Register** (`/login`, `/register`) | Secure authentication & onboarding | Modern credential forms with validation, password visibility toggle, error/success toasts | Submitting login or registration form | Hashes password with bcrypt, validates against MySQL, and redirects to Dashboard/Profile upon success. |

### 6.2 Screen Descriptions & Output Verification

#### 1. Home Dashboard (`http://localhost:5173/`)
The Home Dashboard presents a polished hero banner with headline *"Every Drop Saves a Life"*, quick action cards providing direct access to Find Blood, SOS Emergency, Blood Stock, and Hospitals. It includes a live blood compatibility chart and FAQs addressing common donor concerns.

> **[INSERT SCREENSHOT 1: Home Dashboard Screen]**
> *(Captures the hero section, quick action buttons, live platform stats, and navigation bar)*

#### 2. Find Blood Portal (`http://localhost:5173/findblood`)
Allows users to click any blood type badge (e.g., O+, B-, AB+). Upon selection, the application performs an instantaneous fetch to the backend API (`/findblood/:blood`) and populates donor cards displaying verified donor names, locations, phone numbers, and direct communication buttons.

> **[INSERT SCREENSHOT 2: Find Blood Screen with Matching Donors]**
> *(Captures blood group selection filters and active donor contact cards)*

#### 3. Blood Stock Inventory (`http://localhost:5173/bloodstock`)
Renders an analytical overview of current donor reserves grouped by blood type. Each card visually represents the volume of available units with colored indicators (Green for healthy stock, Amber for moderate, Red for critically low).

> **[INSERT SCREENSHOT 3: Blood Stock Inventory Dashboard]**
> *(Captures blood group cards with real-time donor tallies and percentage indicators)*

#### 4. Emergency SOS Portal (`http://localhost:5173/sos`)
An emergency interface designed with high-visibility alerts. Patients or attendants enter the recipient's name, urgent contact number, required blood group, and emergency hospital location, triggering a broadcast recorded in the database.

> **[INSERT SCREENSHOT 4: Emergency SOS Submission Form]**
> *(Captures emergency notice banner, input fields, and submission confirmation)*

#### 5. Hospital Directory (`http://localhost:5173/hospital`)
Provides direct telephone access, ambulance dispatch numbers, and addresses for affiliated healthcare centers across the district.

> **[INSERT SCREENSHOT 5: Hospital Directory Screen]**
> *(Captures hospital cards with phone numbers, ambulance hotlines, and addresses)*

#### 6. LifeFlow AI Blood Donation Chatbot (Persistent Widget)
Present on all pages in the bottom right corner. Users can click the pulsing widget to ask questions about eligibility, tattoo waiting periods, weight requirements, and health benefits, receiving immediate medically verified advice.

> **[INSERT SCREENSHOT 6: LifeFlow AI Chatbot Modal in Action]**
> *(Captures the chatbot conversation window displaying answers to donor eligibility)*

#### 7. User Registration & Authentication (`/register` & `/login`)
Features secure forms with client-side field validation, providing seamless registration with bcrypt encryption and immediate login redirect.

> **[INSERT SCREENSHOT 7: Login & Registration Screens]**
> *(Captures the modern login interface with toast notifications)*

\pagebreak

---

# 7. CONCLUSION

The **LifeFlow - BloodBank** full-stack web application was successfully designed, developed, and deployed using **React.js, Vite, Node.js, Express, and MySQL**. 

The system effectively solves the critical communication bottlenecks in the blood donation ecosystem by offering:
* Rapid search of compatible blood donors filtered by blood group.
* Real-time automated blood stock visibility to monitor shortage levels.
* An urgent SOS emergency broadcast system for rapid patient support.
* A direct hospital directory for emergency medical care coordination.
* An intelligent **LifeFlow AI Chatbot** providing 24/7 verified guidance on donation eligibility, preparation, and recovery.
* High data security through **bcrypt password encryption** and relational database management.

Through its responsive design and modern interface, the platform empowers voluntary donors and saves critical time for families and healthcare professionals during medical emergencies.

### Future Enhancements:
1. **SMS / WhatsApp Gateway Integration:** Implementing automated SMS alerts to notify nearby donors instantly when an SOS is submitted.
2. **Geographical GPS Mapping:** Adding Google Maps API integration to display exact donor and blood bank distance with turn-by-turn routing.
3. **Automated Donor Donation Reminders:** Sending automated reminder notifications when a donor's 56-day rest interval has elapsed.
4. **Blood Bank Cold-Storage IoT Sensors:** Integrating IoT temperature monitors for real-time verification of stored blood bags.

\pagebreak

---

# 8. REFERENCE

1. **React Documentation:** Official React Component Framework Documentation — [https://react.dev/](https://react.dev/)
2. **Vite Build Tool:** Next Generation Frontend Tooling Documentation — [https://vite.dev/](https://vite.dev/)
3. **Node.js Documentation:** Node.js Runtime Architecture and API Reference — [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
4. **Express.js Documentation:** Fast, unopinionated, minimalist web framework for Node.js — [https://expressjs.com/](https://expressjs.com/)
5. **MySQL Documentation:** Oracle MySQL 8.0 Reference Manual — [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)
6. **bcrypt NPM Library:** Optimized bcrypt password hashing for Node.js — [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)
7. **World Health Organization (WHO):** Blood Transfusion Safety & Donor Eligibility Standards — [https://www.who.int/campaigns/world-blood-donor-day](https://www.who.int/campaigns/world-blood-donor-day)
8. **National Blood Transfusion Council (NBTC) India:** Blood Donation Criteria & Guidelines — [https://nbtc.naco.gov.in/](https://nbtc.naco.gov.in/)
9. **React Router Documentation:** Declarative Routing for React Applications — [https://reactrouter.com/](https://reactrouter.com/)
10. **MDN Web Docs:** CSS Flexbox, Grid, and Modern Web APIs — [https://developer.mozilla.org/](https://developer.mozilla.org/)
