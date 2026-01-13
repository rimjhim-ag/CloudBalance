import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk, logoutThunk } from "../redux/actions/auth.actions";
import { toast } from "react-toastify";

export  const useAuth = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (payload) => {
    setLoading(true);
    setError(null);
  

    try {
   await dispatch(loginThunk(payload));
    
    } catch (err) {
      setError(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(logoutThunk());
    toast.info("Logged out");
  };

  return {
    login,
    logout,
    loading,
    error,
  };
};
