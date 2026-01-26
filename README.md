# 📚 DevStash

<!-- ===================== REPO STATS ===================== -->
![Repo Size](https://img.shields.io/github/repo-size/TonyStark-19/DevStash?color=yellow)
![Stars](https://img.shields.io/github/stars/TonyStark-19/DevStash?color=blue)
![Last Commit](https://img.shields.io/github/last-commit/TonyStark-19/DevStash?color=brightgreen)

<!-- ===================== TECH STACK ===================== -->
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-success?logo=mongodb)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss)

<!-- ===================== AUTH & SECURITY ===================== -->
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Google OAuth](https://img.shields.io/badge/Auth-Google%20OAuth-red?logo=google)
![Secure](https://img.shields.io/badge/Security-Enabled-success)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-purple)


**DevStash** is a high-performance **MERN stack** platform built for developers to discover, save, and contribute high-quality learning resources.
It focuses on security-first authentication, scalable architecture, and a smooth, modern user experience.

This project demonstrates real-world full-stack practices including OAuth integration, protected routing, API optimization, and production-ready deployment.

---

## 🚀 Live Demo & Deployment

The application follows a service-oriented deployment architecture, with frontend and backend hosted independently.

| Component | Deployment Platform | URL |
| :--- | :--- | :--- |
| **🌐 Frontend (Client)** | **Vercel** | [https://devstash-nine.vercel.app/](https://devstash-nine.vercel.app/) |
| **⚙️ Backend (API Proxy)** | **Render** | [https://devstash-1.onrender.com](https://devstash-1.onrender.com) |

> ⚠️ Note: Backend may take a few seconds to respond initially due to Render free-tier cold starts.

---

## 🏆 Featured on Product Hunt

We are officially live on Product Hunt! Support the project by checking us out:

<a href="https://www.producthunt.com/products/devstash?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-devstash" target="_blank">
  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1064040&theme=dark" alt="DevStash - Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
</a>

---

## 📸 Screenshots

| 🏠 Home Page | 📚 All Resources Page |
|------------|------------|
| ![Home Page](/frontend/public/Screenshot/image1.png) | ![Resources Page](/frontend/public/Screenshot/image2.png) |

| 📄 Resource Detail Page | ⭐ Saved Resources Page |
|------------|------------|
| ![Detail Page](/frontend/public/Screenshot/image3.png) | ![Saved Page](/frontend/public/Screenshot/image4.png) |

| 🔐 Login Page |📝 Signup Page |
|------------|------------|
| ![Login Page](/frontend/public/Screenshot/image5.png) | ![Signup Page](/frontend/public/Screenshot/image6.png) |

---

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based authentication** with secure email/password login
- Password hashing using **bcrypt**
- **Google OAuth 2.0** implemented via a custom redirect flow <br />
  (Designed to safely bypass COOP/COEP browser security constraints)

---

### 🧭 Routing & Access Control
- Protected routes using `ProtectedRoute`
- Public-only routes using `PublicRoute`
- Role-aware access handling

---

### 📦 Resource Management

- Curated content across:
  - 6+ domains
  - 48 technologies
  - 109+ developer resources
- Save, explore, and manage learning materials efficiently

---

### 🤝 Community-Driven
- GitHub Issue templates integrated directly into the app
- Users can suggest new resources without modifying code

---

### ⚡ Performance Optimizations
- Cold-start mitigation logic to wake Render backend proactively
- Axios interceptors for:
   - Automatic JWT injection
   - Centralized error handling
   - Instant redirects on unauthorized access

---

### 🎨 UI / UX
- Fully responsive dark-themed UI
- Built with Tailwind CSS
- Subtle glow effects & smooth animations using AOS
- Mobile-first design approach

---

## 🛠️ Tech Stack

### Frontend
- **React 18** (Vite-powered)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Navigation)
- **React Hot Toast** (Notifications)
- **AOS** (Scroll Animations)
- **Axios** (API Management)

---

### Backend
- **Node.js & Express**
- **MongoDB & Mongoose** (Database)
- **JWT** (Session Management)
- **Axios** (Server-side API calls for OAuth verification)

---

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas Account
- Google Cloud Console Project (for OAuth Client ID)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TonyStark-19/DevStash.git
   cd DevStash
   ```
   
2. **Frontend Setup**
   
   ```bash
   cd frontend
   npm install
   
   # Create a .env file
   VITE_GOOGLE_CLIENT_ID=your_google_id
   VITE_API_URL=[https://your-backend-link.com/api](https://your-backend-link.com/api)
   
   npm run dev
   ```
   
3. **Backend Setup**

   ```bash
   cd backend
   npm install
   
   # Create a .env file
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   GOOGLE_CLIENT_ID=your_google_id
   PORT=5000
   
   npm start
   ```
---

## ⭐ Support & Contributions

This project thrives on community input!

- **Give it a Star ⭐**: If you find this project useful.
- **Contribute**: Found a great tutorial? Use the "Suggest a Resource" button in the app to add it to the stash!
- **Report Bugs:** Open an issue if you encounter any technical glitches.

---

## 📜 License

This project is open-source and available under the **MIT License**.  

---

Made with ❤️ by Aditya chandel
