import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false); // ✅ done checking
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setLoading(true);   // show loading immediately
    setIsAuthenticated(true);
    setTimeout(() => setLoading(false), 100); // small delay for smooth transition
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}