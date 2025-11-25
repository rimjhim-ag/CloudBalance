import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/DashboardLayout";
import Onboarding from "../pages/Onboarding";
import CostExplorer from "../pages/CostExplorer";
import AwsExplorer from "../pages/AwsExplorer";
import { Navigate } from "react-router-dom";
import UserRoutes from "./UserRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="user-management" replace />} />
          {UserRoutes()}
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="cost-explorer" element={<CostExplorer />} />
          <Route path="aws-explorer" element={<AwsExplorer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
