import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "@mui/icons-material";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center p-6 border rounded-md shadow-md max-w-md">
        <Lock sx={{ fontSize: 80, color: "#0a3ca2" }} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-[#0a3ca2] mb-2">Unauthorized</h1>
        <p className="text-black mb-6">
          You do not have permission to access this page.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-[#0a3ca2] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
