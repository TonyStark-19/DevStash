// import navigate and use auth
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // if the user is Authenticated navigate to home page
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}