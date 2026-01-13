import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import {useUsers } from "../../hooks/useUsers";
import ManageAccount from "../../components/ManageAccounts";

const AddUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const {addUser, getUserById, updateUser } = useUsers();

  const isEdit = location.pathname.includes("edituser");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
  });


  useEffect(() => {
    if (isEdit && id) {
      getUserById(id)
        .then((data) => {
          setFormData({
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            email: data.email || "",
            role: data.role || "",
        
          });
        })
        .catch((err) => console.error("Failed to fetch user", err));
    }
  }, [id, isEdit]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      updateUser(id, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.role,
      });
    } else {
      addUser(formData);
    }

    navigate(-1);
  };

  return (
    <div className="mt-10 mx-10 overflow-auto mb-24">
      <h1 className="font-extrabold text-3xl tracking-tight">
        {isEdit ? "Edit User" : "Add User"}
      </h1>

      <div className="relative bg-white mt-10 px-4 py-10 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-[repeat(2,400px)] gap-10 pb-20"
        >
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg"
              placeholder="Enter First Name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg"
              placeholder="Enter Last Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg"
              placeholder="Enter Email ID"
            />
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg"
            >
              <option value="" disabled hidden>Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="CUSTOMER">Customer</option>
              <option value="READ_ONLY">Read-Only</option>
            </select>
          </div>
          
       
        
          {!isEdit && (
            <div className="flex flex-col gap-2">
              <label className="font-medium text-lg">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg"
                placeholder="Enter Password"
              />
            </div>
          )}



             {/* Show ManageAccount only when customer role is selected */}
          
         
        </form>
       


        {formData.role === "CUSTOMER" && (
            <div className="mb-8">
              <ManageAccount />
            </div>
          )}


        {/* Footer Buttons */}
        <div className="absolute bottom-0 left-0 w-full flex justify-end py-2 bg-blue-50 rounded-b-md">
          <Button
            event={()=>navigate(-1)}
            variant="primary"
            padding="px-8 py-2"
            margin="m-2"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            event={handleSubmit}
            variant="secondary"
            padding="px-8 py-2"
            margin="m-2"
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
