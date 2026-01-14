// import navigate and use auth
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

// ProtectedRoute Component
export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // While checking for the token, show a blank screen or a spinner
    if (loading) {
        return (
            <div className="min-h-screen bg-[#030712] flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}