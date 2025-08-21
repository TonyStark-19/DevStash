// import context, usestate and use effect
import { createContext, useState, useContext, useEffect } from "react";

// create context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ loading state

  // check token
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false); // ✅ done checking
  }, []);

  // check token and login
  const login = (token) => {
    localStorage.setItem("token", token);
    setLoading(true);   // show loading immediately
    setIsAuthenticated(true);
    setTimeout(() => setLoading(false), 100); // small delay for smooth transition
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setLoading(true);   // show loading immediately
    setIsAuthenticated(false);
    setTimeout(() => setLoading(false), 100); // small delay for smooth transition
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