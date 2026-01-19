import { useState } from "react";
import { toast } from "react-toastify";
import { API } from "../api";


const useCostReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCostReport = async ({ groupBy = "SERVICE", startDate, endDate, accountId = null, filters } = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await API.post("cost/report", { groupBy, startDate, endDate, accountId, filters });
      setData(res.data);
    } catch (err) {
      setError(err);
      toast.error(err?.response?.data?.error || "Failed to fetch cost report");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchCostReport };
};

export default useCostReport;

