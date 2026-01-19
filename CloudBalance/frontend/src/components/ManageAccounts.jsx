import React, { useEffect, useState } from "react";
import { LuTimerReset } from "react-icons/lu";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import {useAccounts} from "../hooks/useAccounts"



function ManageAccount({associated , setAssociated}) {
  const [allAccounts, setAllAccounts] = useState([]);

 
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [selectedAssociated, setSelectedAssociated] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {getAllAccounts, loading} = useAccounts();

useEffect(() => {
  getAllAccounts().then((data) => {
    setAllAccounts(data || []);
  });
}, []);

const associatedIds = new Set((associated || []).map(acc => acc.Id));

const available = allAccounts.filter(
  acc => !associatedIds.has(acc.Id)
);









  const filteredAvailable = available.filter(
    (acc) =>
      acc.accountName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.accountId.includes(searchTerm)
  );

 
  const toggleSelection = (id, type) => {
    if (type === "available") {
      setSelectedAvailable((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setSelectedAssociated((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    }
  };


  const selectAllAvailable = (e) => {
    if (e.target.checked) {
      setSelectedAvailable(filteredAvailable.map((a) => a.Id));
    } else {
      setSelectedAvailable([]);
    }
  };

 
const addAccounts = () => {
  const toAdd = available.filter(a => selectedAvailable.includes(a.Id));
  setAssociated(prev => [...prev, ...toAdd]);
  setSelectedAvailable([]);
};


 
 const removeAccounts = () => {
  setAssociated(prev =>
    prev.filter(a => !selectedAssociated.includes(a.Id))
  );
  setSelectedAssociated([]);
};


  
const handleReset = () => {
  setAssociated([]);
  setSelectedAvailable([]);
  setSelectedAssociated([]);
  setSearchTerm("");
};


  return (
    <div className="bg-white rounded-md shadow">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Manage Account Id(s)</h3> |
        <button
          onClick={handleReset}
          className="text-sm text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          <LuTimerReset size={16} />
          Reset
        </button>
      </div>

      {/* Main Layout */}
      <div className="p-6">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
          {/* Choose Account IDs */}
          <div className="border border-gray-200 rounded-md bg-gray-50">
            <div className="p-3 bg-white border-b border-gray-200 font-medium flex justify-between items-center">
              <span>Choose Account IDs to Associate</span>
              <span className="text-blue-600 text-sm font-semibold">
                {available.length} Available
              </span>
            </div>

            {/* Search Box */}
            <div className="p-3 bg-white border-b border-gray-200">
              <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Select All */}
            <div className="bg-white border-b border-gray-200">
              <label className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={
                    filteredAvailable.length > 0 &&
                    selectedAvailable.length === filteredAvailable.length
                  }
                  onChange={selectAllAvailable}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-medium">Select All</span>
              </label>
            </div>

            {/* Account List */}
           <div className="max-h-80 overflow-y-auto bg-white flex items-center justify-center">
  {loading ? (
    <div className="py-10">
      {/* simple spinner */}
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  ) : filteredAvailable.length === 0 ? (
    <p className="text-sm text-gray-400 py-6">
      No accounts found
    </p>
  ) : (
    <div className="w-full">
      {filteredAvailable.map((acc, index) => (
        <label
          key={acc.Id}
          className={`flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-gray-100 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <input
            type="checkbox"
            checked={selectedAvailable.includes(acc.Id)}
            onChange={() => toggleSelection(acc.Id, "available")}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="text-sm">
            {acc.accountName} ({acc.accountId})
          </span>
        </label>
      ))}
    </div>
  )}
</div>

          </div>

          {/* Arrows */}
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={addAccounts}
              disabled={selectedAvailable.length === 0}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-white"
              title="Add selected accounts"
            >
              <FaArrowRight size={18} />
            </button>
            <button
              onClick={removeAccounts}
              disabled={selectedAssociated.length === 0}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-white"
              title="Remove selected accounts"
            >
              <FaArrowLeft size={18} />
            </button>
          </div>

          {/* Associated Account IDs */}
          <div className="border border-gray-200 rounded-md bg-gray-50">
            <div className="p-3 bg-white border-b border-gray-200 font-medium flex justify-between items-center">
              <span>Associated Account IDs</span>
              <span className="text-blue-600 text-sm font-semibold">
                {associated?.length} Added
              </span>
            </div>

            <div className="max-h-96 overflow-y-auto bg-white">
              {associated?.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-gray-400 py-20">
                  <FaRegFolderOpen size={64} className="mb-4" />
                  <p className="font-semibold text-lg text-gray-700 mb-1">
                    No Account IDs Added
                  </p>
                  <p className="text-sm">
                    Selected Account IDs will be shown here.
                  </p>
                </div>
              ) : (
                associated?.map((acc, index) => (
                  <label
                    key={acc.Id}
                    className={`flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAssociated.includes(acc.Id)}
                      onChange={() => toggleSelection(acc.Id, "associated")}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm">
                      {acc.name} ({acc.accountId})
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAccount;