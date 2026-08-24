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

| Category                         | Overview                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 🔐 **Authentication & Security** | Secure JWT authentication with bcrypt password hashing and Google OAuth 2.0.                           |
| 🧭 **Routing & Access Control**  | Protected and public routes with role-based access handling.                                           |
| 📦 **Resource Management**       | 109+ curated developer resources across 6+ domains and 48 technologies.                                |
| 🤝 **Community-Driven**          | GitHub-powered resource suggestions that let users contribute easily.                                  |
| ⚡ **Performance**                | Optimized API handling with JWT interceptors, error handling, and backend cold-start mitigation.       |
| 🎨 **UI / UX**                   | Responsive dark-themed interface built with Tailwind CSS, AOS animations, and a mobile-first approach. |

---

## 🛠️ Tech Stack

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| **React 18**         | Frontend framework, Vite-powered             |
| **Tailwind CSS**     | Styling                                      |
| **React Router DOM** | Navigation & routing                         |
| **React Hot Toast**  | Notifications                                |
| **AOS**              | Scroll animations                            |
| **Axios**            | API management & HTTP requests               |
| **Node.js**          | Backend runtime                              |
| **Express**          | Backend framework                            |
| **MongoDB**          | Database                                     |
| **Mongoose**         | MongoDB object modeling                      |
| **JWT**              | Session & authentication management          |
| **Axios**            | Server-side API calls for OAuth verification |
| **Vercel**           | Frontend deployment                          |
| **Render**           | Backend deployment                           |
| **MongoDB Atlas**    | Cloud database hosting                       |

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas Account
- Google Cloud Console Project (for OAuth Client ID)

---

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

Please read the **[CONTRIBUTING.md](CONTRIBUTING.md)** before you start.

---

## 📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and share it – just give proper credit.

Check the [LICENSE](LICENSE) file for more details.

---

Made with ❤️ by Aditya chandel
