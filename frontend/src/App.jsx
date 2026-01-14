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
import ScrollToTop from "./Components/ScrollToTop";

// import Toaster
import { Toaster } from "react-hot-toast";

// App Routes Component
function AppRoutes() {
  const { loading } = useAuth();

  // Show loading screen while auth state is being determined
  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen bg-[#030712] font-poppins"
      >
        <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 font-medium tracking-widest animate-pulse">
          DEVSTASH
        </p>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />

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
          path="/resources/:category/:subcategory"
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
    </>
  );
}

// Main App Component
export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#111827",
            color: "#fff",
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#06B6D4",
              secondary: "#fff",
            },
          },
        }}
      />
    </AuthProvider>
  );
}