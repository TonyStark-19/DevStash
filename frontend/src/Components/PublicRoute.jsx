// src/components/PublicRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}