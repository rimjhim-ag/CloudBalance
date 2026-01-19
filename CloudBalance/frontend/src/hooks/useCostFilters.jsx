import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../api";

const useCostFilters = () => {
  const [allFilters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await API.get("cost/filters");
        setFilters(res.data);
      } catch (err) {
        setError(err);
        toast.error(err?.response?.data?.error || "Failed to fetch filters");
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  return { allFilters, loading, error };
};

export default useCostFilters;
