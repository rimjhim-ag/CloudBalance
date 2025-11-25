import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Add, Edit } from "@mui/icons-material";
import Button from "../../components/Button";

const UserManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAddUser = location.pathname.endsWith("adduser");

  const handleClick = () => {
    navigate("adduser");
  };

  const headers = ["First Name", "Last Name", "Email ID", "Role", "Actions"];
  const usersData = [
    {
      firstName: "Rimjhim",
      lastName: "Agrawal",
      email: "rimjhim@gmail.com",
      role: "Admin",
    },
    {
      firstName: "Aarav",
      lastName: "Sharma",
      email: "aarav.sharma@example.com",
      role: "Customer",
    },
    {
      firstName: "Isha",
      lastName: "Verma",
      email: "isha.verma@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Kabir",
      lastName: "Khanna",
      email: "kabir.khanna@example.com",
      role: "Admin",
    },
    {
      firstName: "Meera",
      lastName: "Patel",
      email: "meera.patel@example.com",
      role: "Customer",
    },
    {
      firstName: "Vivaan",
      lastName: "Singh",
      email: "vivaan.singh@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Tanya",
      lastName: "Mehta",
      email: "tanya.mehta@example.com",
      role: "Admin",
    },
    {
      firstName: "Raghav",
      lastName: "Kapoor",
      email: "raghav.kapoor@example.com",
      role: "Customer",
    },
    {
      firstName: "Anaya",
      lastName: "Rao",
      email: "anaya.rao@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Dev",
      lastName: "Chatterjee",
      email: "dev.chatterjee@example.com",
      role: "Admin",
    },
    {
      firstName: "Mira",
      lastName: "Nair",
      email: "mira.nair@example.com",
      role: "Customer",
    },
    {
      firstName: "Sarthak",
      lastName: "Bajaj",
      email: "sarthak.bajaj@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Kabir",
      lastName: "Khanna",
      email: "kabir.khanna@example.com",
      role: "Admin",
    },
    {
      firstName: "Meera",
      lastName: "Patel",
      email: "meera.patel@example.com",
      role: "Customer",
    },
    {
      firstName: "Vivaan",
      lastName: "Singh",
      email: "vivaan.singh@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Tanya",
      lastName: "Mehta",
      email: "tanya.mehta@example.com",
      role: "Admin",
    },
    {
      firstName: "Raghav",
      lastName: "Kapoor",
      email: "raghav.kapoor@example.com",
      role: "Customer",
    },
    {
      firstName: "Anaya",
      lastName: "Rao",
      email: "anaya.rao@example.com",
      role: "Read-Only",
    },
    {
      firstName: "Dev",
      lastName: "Chatterjee",
      email: "dev.chatterjee@example.com",
      role: "Admin",
    },
    {
      firstName: "Mira",
      lastName: "Nair",
      email: "mira.nair@example.com",
      role: "Customer",
    },
    {
      firstName: "Sarthak",
      lastName: "Bajaj",
      email: "sarthak.bajaj@example.com",
      role: "Read-Only",
    },
  ];

  return (
    <>
      {!isAddUser ? (
        <div className="mt-10 flex flex-col ml-6 gap-10">
          <h1 className="font-extrabold text-3xl tracking-tight">Users</h1>

          <div className="bg-white flex flex-col w-full max-w-[1200px] rounded-md">
            <div>
              <Button
                event={handleClick}
                variant="filled"
                padding="px-3 py-2"
              >
                <Add sx={{ width: 30, height: 30 }} />
                <span>Add New User</span>
              </Button>
            </div>

            <table className="border-2 border-gray-200 rounded-lg mx-5 border-collapse">
              <thead>
                <tr className="bg-blue-50  divide-x-2 divide-white">
                  {headers.map((heading, index) => (
                    <th key={index} className="p-3 text-[#0a3ca2]">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {usersData.map((data, index) => (
                  <tr
                    key={index}
                    className="text-center even:bg-gray-100 divide-x-2 divide-white"
                  >
                    <td className="p-3">{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>
                      <span className="border-2 border-[#0a3ca2] rounded-sm px-3 py-1 text-[#0a3ca2] bg-blue-50 truncate">
                        {data.role}
                      </span>
                    </td>
                    <td>
                      <button onClick={handleClick} className="cursor-pointer">
                        <Edit sx={{ color: "#0a3ca2" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Outlet /> 
      )}
    </>
  );
};

export default UserManagement;
