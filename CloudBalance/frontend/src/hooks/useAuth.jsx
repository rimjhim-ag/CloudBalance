import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk, logoutThunk } from "../redux/actions/auth.actions";
import { toast } from "react-toastify";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const login = async (payload) => {
    setLoading(true);
    try {
      await dispatch(loginThunk(payload));
      toast.success("Login Successfully")
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    
    await dispatch(logoutThunk());
    toast.info("Logged out");
  };

  return { login, logout, loading };
};
