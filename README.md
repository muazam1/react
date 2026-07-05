<h1 align="center">⚛️ React.js Learning Journey</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Appwrite-Backend-F02E65?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</p>

<p align="center">
  A structured, hands-on learning path through React.js — from core fundamentals to a full-stack production-grade blog application.
</p>

---

## 📚 About This Repository

This repository documents my **complete React.js learning journey**, progressing from basic JSX and components all the way to building a real-world full-stack blog app with authentication, cloud storage, and rich text editing.

Each folder is a standalone project or concept exploration, numbered in the order they were built.

---

## 🗂️ Project Structure

| # | Folder | Topic / Project | Key Concepts |
|---|--------|-----------------|--------------|
| 01 | `01basicreact` | React Basics | JSX, Components, Rendering |
| 01 | `01vitereact` | Vite Setup | Vite Dev Server, React + Vite |
| 02 | `02counter` | Counter App | `useState`, Event Handling |
| 03 | `03tailwindprops` | Tailwind + Props | Props, Tailwind CSS, Card Component |
| 04 | `04bgchanger` | Background Changer | `useState`, Dynamic Styling |
| 05 | `05passwordGenerator` | Password Generator | `useCallback`, `useRef`, `useEffect` |
| 06 | `06currencyConverter` | Currency Converter | Custom Hooks, `useMemo`, API Fetching |
| 07 | `07reactRouter` | React Router | `react-router-dom`, Nested Routes, Loaders |
| 08 | `08miniContext` | Context API Mini App | `useContext`, `createContext`, Provider Pattern |
| 09 | `09ThemeSwitch` | Theme Switcher | Context API, Dark/Light Mode Toggle |
| 10 | `10TodoContextLocalStorage` | Todo App | Context API + `localStorage` Persistence |
| 11 | `11ReduxToolKitTodo` | Redux Todo App | Redux Toolkit, Slices, `useSelector`, `useDispatch` |
| 12 | `12MegoBlogApp` | **Mega Blog App** 🚀 | Full-Stack: Appwrite BaaS, Auth, Rich Text Editor |
| — | `customReact` | Custom React | Building a mini React from scratch |

---

## 🚀 Highlight: Mega Blog App (`12MegoBlogApp`)

The capstone project — a **full-featured blog platform** built with:

- **Frontend:** React 19, Vite, Tailwind CSS 4
- **Backend-as-a-Service:** [Appwrite](https://appwrite.io/) (Auth, Database, Storage)
- **State Management:** Redux Toolkit + React Redux
- **Routing:** React Router DOM v7
- **Forms:** React Hook Form
- **Rich Text Editor:** TinyMCE

### Features
- 🔐 User Authentication (Sign Up / Login / Logout)
- ✍️ Create, Edit & Delete Blog Posts
- 🖼️ Image Upload & Storage via Appwrite
- 📝 Rich Text Editing with TinyMCE
- 🛡️ Protected Routes with `AuthLayout`
- 📱 Fully Responsive UI

---

## 🧠 Concepts Covered

```
✅ JSX & Components          ✅ React Router DOM
✅ Props & State             ✅ Context API
✅ useState / useEffect      ✅ Redux Toolkit
✅ useRef / useCallback      ✅ React Hook Form
✅ Custom Hooks              ✅ Appwrite BaaS Integration
✅ useMemo / useContext      ✅ TinyMCE Rich Text Editor
✅ Tailwind CSS              ✅ Environment Variables (.env)
```

---

## ⚙️ Getting Started

Each sub-project is independent. To run any Vite-based project:

```bash
# Navigate into any project folder
cd 05passwordGenerator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Mega Blog App Setup

```bash
cd 12MegoBlogApp

# Install dependencies
npm install

# Copy environment file and fill in your Appwrite credentials
cp .env.sample .env

# Start development server
npm run dev
```

**Required `.env` variables for the Blog App:**
```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| Vite 7 | Build Tool & Dev Server |
| Tailwind CSS 4 | Utility-first Styling |
| Redux Toolkit | Global State Management |
| React Router DOM | Client-side Routing |
| React Hook Form | Form Management |
| Appwrite | Backend-as-a-Service |
| TinyMCE | Rich Text Editing |

---

## 📈 Learning Path

```
Fundamentals → Hooks → Custom Hooks → Context API → Redux → Full-Stack App
```

This repo follows a progressive learning approach — each project builds on the concepts from the previous one, making it a great reference for anyone learning React from scratch.

---

## 👤 Author

**Muazam**  
Learning React.js — one project at a time. 🚀

[![GitHub](https://img.shields.io/badge/GitHub-muazam1-181717?style=flat-square&logo=github)](https://github.com/muazam1)

---

<p align="center">Made with ❤️ while learning React.js</p>
