// import createContext and other necessary hooks
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Helper to check if token is expired locally
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
      return payload.exp * 1000 < Date.now(); // Check if expiry time is in the past
    } catch (e) {
      return true;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setLoading(false);
  };

  // Check auth status on initial load and when tab gains focus
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token && !isTokenExpired(token)) {
      setIsAuthenticated(true);
    } else {
      if (token) logout(); // Clean up if it was expired
      setIsAuthenticated(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    // 1. Check on initial load
    checkAuth();

    // 2. Check when user switches back to this tab (Fixes your lag issue)
    const handleFocus = () => {
      const token = localStorage.getItem("token");
      if (token && isTokenExpired(token)) {
        toast.error("Session expired. Please login again.");
        logout();
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Login function
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setLoading(false);
  };

  // Provide auth state and functions to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}