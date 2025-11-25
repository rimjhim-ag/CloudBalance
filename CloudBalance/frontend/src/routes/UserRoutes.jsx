import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from '../pages/Users/AddUser';
import UserManagement from "../pages/Users/UserManagement";

const UserRoutes = () => {
  return (
       <Route path="user-management" element={<UserManagement />} >
          <Route path="adduser" element={<AddUser />} />
          </Route>

        
  )
}

export default UserRoutes