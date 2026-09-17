# CodeSync

> **Solve. Sync. Track.**

A modern Chrome Extension that syncs coding solutions to GitHub, organizes repositories, generates professional `README.md` files, and tracks your coding journey with powerful analytics.

![React](https://img.shields.io/badge/React-Latest-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-Latest-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub-API-181717?style=flat-square&logo=github&logoColor=white)
![GitHub OAuth](https://img.shields.io/badge/GitHub-OAuth-181717?style=flat-square&logo=github&logoColor=white)
![Chrome Storage](https://img.shields.io/badge/Chrome-Storage-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-Icons-F56565?style=flat-square&logo=lucide&logoColor=white)

---

## ✨ What is CodeSync?

CodeSync is a developer productivity Chrome Extension designed to make coding practice **organized, trackable, and GitHub-ready**.

Instead of manually copying solutions, creating folders, updating repositories, and maintaining documentation, CodeSync brings the workflow together in one place.

    Solve
      ↓
    Track
      ↓
    Organize
      ↓
    Sync
      ↓
    GitHub

---

## 🚀 Features

- 🔗 **GitHub Integration** — Connect and manage your GitHub account
- 🔄 **Solution Sync** — Sync coding-practice solutions to GitHub
- 📁 **Smart Organization** — Platform → Difficulty based repository structure
- 📝 **README Generation** — Generate professional repository documentation
- 📊 **Coding Analytics** — Track problems, difficulty, platforms, streaks and progress
- 🧩 **Multi-Platform Support** — LeetCode, HackerRank and GeeksforGeeks
- 🌗 **Theme Support** — Light, Dark and System themes
- 💾 **Local-First Data** — User-specific extension data stored locally
- ⚡ **Modern Dashboard** — Fast and responsive developer-focused interface
- 🔐 **Security First** — Minimal permissions and secure authentication practices

---

## 📂 Repository Structure

CodeSync keeps coding solutions organized into dedicated repositories.

### Algorithms

    CodeSync-Algorithms/
    │
    ├── LeetCode/
    │   ├── Easy/
    │   ├── Medium/
    │   └── Hard/
    │
    ├── HackerRank/
    │   ├── Easy/
    │   ├── Medium/
    │   └── Hard/
    │
    └── GeeksforGeeks/
        ├── Easy/
        ├── Medium/
        └── Hard/

The same structure can be used for other categories:

    CodeSync-Data-Structures/
    CodeSync-SQL/
    CodeSync-NoSQL/
    CodeSync-System-Design/
    CodeSync-Cloud/
    CodeSync-DevOps/

---

## 📊 Dashboard

Every user gets a **personal dashboard** containing their own coding data.

Track:

- Total problems solved
- Easy / Medium / Hard distribution
- Current streak
- Longest streak
- Platform statistics
- Topic distribution
- Programming language distribution
- Recent activity
- Repository sync activity
- GitHub repositories
- Runtime and memory statistics
- Progress over time

---

## 📝 Smart README Generation

CodeSync can generate structured `README.md` documentation for synchronized repositories.

Generated documentation can include:

- Repository overview
- Platform statistics
- Difficulty distribution
- Topics
- Programming languages
- Repository structure
- Problem statistics
- Recent activity
- Platform information

The goal is to keep coding repositories **clean, documented, organized, and portfolio-ready**.

---

## 🏗️ Architecture

    Coding Platform
          │
          ▼
     Content Script
          │
          ▼
    Background Service Worker
          │
          ├──────────────► Platform Services
          │
          └──────────────► GitHub API
                                  │
                                  ▼
                            GitHub Repository

                       ┌─────────────────┐
                       │ chrome.storage  │
                       │     .local      │
                       └────────┬────────┘
                                │
                                ▼
                         React Dashboard

The architecture keeps the UI, platform integrations, GitHub services, storage, and background operations separated for maintainability and future expansion.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User Interface |
| Vite | Build Tool |
| JavaScript ES6+ | Application Logic |
| Tailwind CSS v4 | Styling |
| Chrome Manifest V3 | Extension Architecture |
| Chrome Storage API | Local Data Storage |
| GitHub API | Repository Integration |

---

## 🔐 Privacy & Security

CodeSync follows a **local-first approach**.

User-specific coding data is intended to remain within the user's extension environment unless the user explicitly uses a service that requires external communication, such as GitHub synchronization.

CodeSync does not intentionally collect:

- GitHub passwords
- GitHub access tokens for analytics
- Solution source code for telemetry
- Private repository contents for analytics
- Personal credentials
- Private coding activity for product analytics

Any future anonymous product analytics will be separated from user coding data and limited to non-personal product metrics.

---

## 💻 Development

### Prerequisites

- Node.js
- npm
- Google Chrome

### Clone

    git clone https://github.com/byteAlok/CodeSyncBrowserExtension.git
    cd CodeSyncBrowserExtension

### Install Dependencies

    npm install

### Development

    npm run dev

### Production Build

    npm run build

The production extension will be generated inside:

    dist/

---

## 🌐 Load Extension Locally

1. Open Google Chrome.
2. Navigate to:

       chrome://extensions

3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project's `dist` directory.

CodeSync will now be available as a local Chrome Extension.

---

## 🗺️ Roadmap

- [x] React + Vite foundation
- [x] Chrome Manifest V3 foundation
- [x] Modern dashboard
- [x] Light / Dark / System themes
- [x] Responsive dashboard layout
- [x] Platform architecture
- [ ] GitHub authentication
- [ ] GitHub repository management
- [ ] GitHub CRUD operations
- [ ] Solution synchronization
- [ ] Automatic README generation
- [ ] LeetCode integration
- [ ] HackerRank integration
- [ ] GeeksforGeeks integration
- [ ] Advanced coding analytics
- [ ] Anonymous product analytics
- [ ] Chrome Web Store release

---

## 👨‍💻 Creator

**Alok Maurya**  
**Full Stack Engineer**

Building CodeSync to make coding practice more organized, measurable, and GitHub-ready.

---

<p align="center">
  <strong>CodeSync</strong><br>
  Solve. Sync. Track.
</p>