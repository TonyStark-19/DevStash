// App.jsx
import { Routes, Route } from "react-router-dom";

// import components, pages, context
import { Home } from "./Pages/Home";
import { Resources } from "./Pages/Resources";
import { ResourceDetail } from "./Pages/ResourceDetail";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { SavedResources } from "./Pages/SavedResources";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import { AuthProvider, useAuth } from "./Context/AuthContext";

function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
        }}>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Protected routes */}
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
        path="/resources/:subcategory"
        element={
          <ProtectedRoute>
            <ResourceDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/saved"
        element={
          <ProtectedRoute>
            <SavedResources />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}