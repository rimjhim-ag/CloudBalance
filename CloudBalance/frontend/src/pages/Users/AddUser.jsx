import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate(-1);

  return (
    <div className="mt-10 mx-10">
      <h1 className=" font-extrabold text-3xl tracking-tight">
        {" "}
        Add New User{" "}
      </h1>

      <div className=" relative bg-white mt-10  px-4 py-10 rounded-md">
        <form className="grid lg:grid-cols-[repeat(2,400px)] grid-rows-2 gap-10 sm:grid-cols-1 pb-20 ">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg ">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className=" px-4 py-3 border-2 border-gray-200 rounded-lg "
              placeholder="Enter First Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg ">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="px-4 py-3 border-2 border-gray-200 rounded-lg "
              placeholder="Enter Last Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg ">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className=" px-4 py-3 border-2 border-gray-200 rounded-lg "
              placeholder="Enter Email ID"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-lg ">
              Role <span className="text-red-500">*</span>
            </label>
            <select className=" px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-500">
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
              <option value="Read-Only">Read-Only</option>
            </select>
          </div>
        </form>

        <div className=" absolute bottom-0 left-0 w-full flex justify-end  py-2 bg-blue-50 rounded-b-md">
          <Button
            event={handleSubmit}
            variant="primary"
            padding="px-8 py-2"
            margin="m-2"
          >
            Cancel
          </Button>
          <Button
            event={handleSubmit}
            variant="secondary"
            padding="px-8 py-2"
            margin="m-2"
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
