import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import Loader from "./Loader";
import { canAccessRoute, getFirstAllowedRoute } from "../utils/roleGuard";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const { role, isFetched, isLoading } = useSelector((state) => state.user);
  const location = useLocation();
  const { fetchCurrentUserCall } = useUsers();

  useEffect(() => {
    if (token && !isFetched && !isLoading) {
      fetchCurrentUserCall();
    }
  }, [token, isFetched, isLoading, fetchCurrentUserCall]);

 
  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (isLoading || !isFetched) {
    return <Loader fullScreen />;
  }


  if (location.pathname === "/dashboard") {
    const firstAllowed = getFirstAllowedRoute(role);
    return firstAllowed ? (
      <Navigate to={firstAllowed} replace />
    ) : (
      <Navigate to="/unauthorized" replace />
    );
  }


  if (!canAccessRoute(role, location.pathname)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
