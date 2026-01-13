import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import Loader from "./Loader";


const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const { isFetched, isLoading } = useSelector((state) => state.user);
  const { fetchCurrentUserCall } = useUsers();

  useEffect(() => {
    if (token && !isFetched && !isLoading) {
      fetchCurrentUserCall();
    }
  }, [token, isFetched, isLoading]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (isLoading || !isFetched) {
    console.log("entered loading ui");
    return (
     <Loader fullScreen/>
    );
  }

  return children;
};

export default ProtectedRoute;
