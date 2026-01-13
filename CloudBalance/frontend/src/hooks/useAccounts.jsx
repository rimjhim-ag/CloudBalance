import React, { useState } from 'react'
import { API } from '../api';
import { toast } from 'react-toastify';

export const useAccounts = () => {

    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const addAccount = async (payload) => {
    setLoading(true);
    setError(null);

    try {
     
        
      const res = await API.post("/accounts", payload);
      console.log(res);
       toast.success(res?.data);
      
    } catch (err) {
      setError(err);
      toast.error(err?.message || "Failed to add account");
      throw err;
    } finally {
      setLoading(false);
    }
  };



  


return {addAccount , loading, error}};