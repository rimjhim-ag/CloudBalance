import { useState } from "react";
import { toast } from "react-toastify";
import {API} from "../api";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../redux/actions/user.actions";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
 
  const getUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.get("/users");
      return res.data;
    } catch (err) {
      setError(err);
      toast.error(err?.message || "Failed to fetch users");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getUserById = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.get(`/user/${id}`);
      return res.data;
    } catch (err) {
      setError(err);
      toast.error(err?.response?.data?.error|| "Failed to fetch user");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.post("/users", payload);
      toast.success("User added successfully");
      return res.data;
    } catch (err) {
      setError(err);
      console.log(err);
      toast.error(err?.response?.data?.error || "Failed to add user");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, payload) => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.put(`/user/${id}`, payload);
      toast.success("User updated successfully");
      return res.data;
    } catch (err) {
      setError(err);
      toast.error(err?.response?.data?.error || "Failed to update user");
      throw err;
    } finally {
      setLoading(false);
    }
  };

    const getUserAccounts = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const res = await API.get(`users/${id}/accounts`);
      console.log("res data " + res)
      return res.data;
    } catch (err) {
      setError(err);
      toast.error(err?.response?.data?.error || "Failed to fetch user accounts");
      throw err;
    } finally {
      setLoading(false);
    }
  };

const fetchCurrentUserCall = async () => {
  return dispatch(fetchCurrentUser());
};





  return {
    getUsers,
    getUserById,
    addUser,
    getUserAccounts,
    fetchCurrentUserCall,
    updateUser,
    loading,
    error,
  };
};
