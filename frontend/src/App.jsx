// router
import { Routes, Route } from "react-router-dom";

// import components, pages, context
import { Home } from "./Pages/Home";
import { Resources } from "./Pages/Resources";
import { React } from "./Pages/React";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import { AuthProvider } from "./Context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes (only when NOT logged in) */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Protected routes (only when logged in) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/react"
          element={
            <ProtectedRoute>
              <React />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}