import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../api";

export const useCostExplorer = ({
  filter = "SERVICE",
  startDate,
  endDate,
} = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCostReport = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await API.get("cost/report", {
          params: {
            filter,
            startDate,
            endDate,
          },
        });
        setData(res.data);
      } catch (err) {
        setError(err);
        toast.error(err?.message || "Failed to fetch report");
      } finally {
        setLoading(false);
      }
    };

    fetchCostReport();
  }, [filter, startDate, endDate]);

  return {
    data,
    loading,
    error,
  };
};
