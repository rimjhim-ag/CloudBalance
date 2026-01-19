import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/DashboardLayout";
import Onboarding from "../pages/Onboarding/Onboarding";
import CostExplorer from "../pages/CostExplorer/CostExplorer";
import AwsExplorer from "../pages/AwsExplorer/AwsExplorer";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import UsersTable from "../pages/Users/UsersTable";
import AddUser from "../pages/Users/AddUser";
import AddManagedPolicies from "../pages/Onboarding/AddManagedPolicies";
import CreateCUR from "../pages/Onboarding/CreateCUR";
import UnauthorizedPage from "../pages/Unauthorized/UnauthorizedPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<UsersTable />} />
            <Route path="users/adduser" element={<AddUser />} />
            <Route path="users/edituser/:id" element={<AddUser />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="managed-policy" element={<AddManagedPolicies />} />
            <Route path="create-cur" element={<CreateCUR />} />

            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route path="aws-explorer" element={<AwsExplorer />} />
          </Route>

          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route
            path="*"
            element={
              <h1 className="text-2xl font-black flex jsutify-center items-center">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
