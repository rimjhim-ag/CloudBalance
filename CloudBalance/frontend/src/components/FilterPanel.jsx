import React, {  useState } from "react";

import { filters } from "../utils/filterConstant"; 
import useCostFilters from "../hooks/useCostFilters";
import { useSelector } from "react-redux";

const FiltersPanel = ({ setDraftFilters, onApply }) => {
  const [openFilter, setOpenFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({});
  const { allFilters } = useCostFilters();
  const { role } = useSelector((state) => state.user);
const isCustomer = role === "CUSTOMER";


  const frontendToBackend = Object.fromEntries(
    filters.map((f) => [f.name, f.value])
  );


  const mappedFilters = Object.entries(allFilters || {}).map(
    ([key, values]) => {
      const frontendName = filters.find((f) => f.value === key)?.name || key;
      return { name: frontendName, values };
    }
  );

  const handleCheck = (filterName, value) => {
    setSelected((prev) => {
      const current = prev[filterName] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [filterName]: updated };
    });
  };



const handleApply = () => {
  const filtersForApi = {};

  Object.entries(selected).forEach(([key, values]) => {
    const backendKey = frontendToBackend[key];
    if (backendKey) {
      filtersForApi[backendKey] = values;
    }
  });

  onApply(filtersForApi); 
};


  return (
    <div className="h-full bg-white text-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b-2 border-b-[#cfdde5]">
        <h3 className="font-semibold">Filters</h3>
        <button
          onClick={() => {
           setSelected({});
    setDraftFilters({});
    onApply({});         
    setOpenFilter(null);
    setSearch("");
          }}
          className="text-[#0a3ca2] text-xs font-medium"
        >
          Reset All
        </button>
      </div>

     
      {mappedFilters.filter(filter => !(isCustomer && filter.name === "Account Id")).map((filter) => {
        const isOpen = openFilter === filter.name;
        const filteredValues = filter.values.filter((v) =>
          v.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={filter.name} className="border-b-2 border-b-[#cfdde5]">
        
            <div
              onClick={() => setOpenFilter(isOpen ? null : filter.name)}
              className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" readOnly checked={isOpen} />
                <span className="font-medium">{filter.name}</span>
              </div>

              <div className="flex items-center gap-1 text-gray-500">
                <span className="text-xs">Include Only</span>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>
            </div>

         
            {isOpen && (
              <div className="px-4 pb-4">
                <p className="text-[#0a3ca2] text-xs font-medium mb-2">
                  {Object.values(selected[filter.name] || []).length} Items
                  Selected
                </p>

                <input
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[#cfdde5] rounded-md mb-2"
                />

                <p className="text-xs text-gray-500 mb-2">
                  Showing {filteredValues.length} results
                </p>

                <div className="max-h-48 overflow-auto space-y-2 mb-4">
                  {filteredValues.map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={(selected[filter.name] || []).includes(value)}
                        onChange={() => handleCheck(filter.name, value)}
                      />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Close & Apply INSIDE expanded */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setOpenFilter(null)}
                    className="px-4 py-1 cursor-pointer border-2 border-[#cfdde5] rounded-md text-[#0a3ca2]"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleApply}
                    className="px-4 py-1 bg-[#0a3ca2] cursor-pointer text-white rounded-md"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FiltersPanel;
