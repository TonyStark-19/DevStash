// import navigate and use auth
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

// PublicRoute Component
export default function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // While checking for the token, show a blank screen or a spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}