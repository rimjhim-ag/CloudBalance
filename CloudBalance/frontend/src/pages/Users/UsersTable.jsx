import React , {useState, useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { Add, Edit } from "@mui/icons-material";
import Button from "../../components/Button";
import {useUsers} from "../../hooks/useUsers";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";



const UsersTable = () => {
  const navigate = useNavigate();
  const { getUsers, loading, error} = useUsers();

   
  const [usersData , setUsersData] = useState([]);
  const headers = ["First Name", "Last Name", "Email ID", "Role", "Actions"];
   


  
  useEffect(() =>{
   getUsers().then(data => setUsersData(data))

  }, [])

   const { role , userId : currentUserId} = useSelector((state) => state.user);
  const isRoleAdmin = role === "ADMIN"; 





  const handleAddUser = () => {
    navigate("adduser");
  };

  return (
    <div className="mt-10 flex flex-col pb-30 ml-6 gap-10">
      <h1 className="font-extrabold text-3xl tracking-tight">Users</h1>

      <div className="bg-white pb-5 flex flex-col w-full max-w-[1200px] rounded-md">
        <div>
          <Button event={handleAddUser}   disabled={!isRoleAdmin} variant="filled" padding="px-3 py-2">
            <Add sx={{ width: 30, height: 30 }} />
            <span>Add New User</span>
          </Button>
        </div>


      

         <table className="border-2 border-gray-200 rounded-lg mx-5 border-collapse">
          <thead>
            <tr className="bg-blue-50 divide-x-2 divide-white">
              {headers.map((heading, index) => (
                <th key={index} className="p-3 text-[#0a3ca2]">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

         <tbody>
  {/* LOADING STATE */}
  {loading &&
    [...Array(3)].map((_, rowIndex) => (
      <tr
        key={rowIndex}
        className="text-center even:bg-gray-100 divide-x-2 divide-white"
      >
        {headers.map((_, colIndex) => (
          <td key={colIndex} className="p-3">
            <Skeleton />
          </td>
        ))}
      </tr>
    ))}

  {/* ERROR STATE */}
  {!loading && error && (
    <tr>
      <td
        colSpan={headers.length}
        className="p-6 text-center text-red-600"
      >
        {error?.message || "Something went wrong"}
      </td>
    </tr>
  )}

  {/* SUCCESS STATE */}
  {!loading &&
    !error &&
    usersData.filter((user) => user.usersId !== currentUserId).map((data) => (
      <tr
        key={data.usersId}
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
          <button
            onClick={() => navigate(`edituser/${data.usersId}`)}
            className="cursor-pointer"
              disabled={!isRoleAdmin}
          >
            <Edit sx={{ color: "#0a3ca2" }} />
          </button>
        </td>
      </tr>
    ))}
</tbody>

        </table>

      
      </div>
    </div>
  );
};

export default UsersTable;
