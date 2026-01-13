import React, { useState } from "react";

const FILTERS = [
  {
    name: "Instance Type",
    values: [
      "c4.large",
      "c4.xlarge",
      "c4.8xlarge",
      "c5.large",
      "c5.xlarge",
      "c5.2xlarge",
      "c5.4xlarge",
      "c5.9xlarge",
      "No Instance Type",
    ],
  },
  {
    name: "Service",
    values: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon CloudFront",
      "Amazon DynamoDB",
      "Amazon Lambda",
    ],
  },
  {
    name: "Region",
    values: [
      "us-east-1",
      "us-west-2",
      "ap-south-1",
      "eu-west-1",
      "ap-northeast-1",
    ],
  },
];

const FiltersPanel = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const handleCheck = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="h-full bg-white text-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b-2 border-b-[#cfdde5]">
        <h3 className="font-semibold">Filters</h3>
        <button className="text-[#0a3ca2] text-xs font-medium">
          Reset All
        </button>
      </div>

      {/* Filter List */}
      {FILTERS.map((filter) => {
        const isOpen = openFilter === filter.name;

        const filteredValues = filter.values.filter((v) =>
          v.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={filter.name} className="border-b-2 border-b-[#cfdde5]">
            {/* Normal Row */}
            <div
              onClick={() =>
                setOpenFilter(isOpen ? null : filter.name)
              }
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

            {/* Expanded Section */}
            {isOpen && (
              <div className="px-4 pb-4">
                <p className="text-[#0a3ca2] text-xs font-medium mb-2">
                  {selected.length} Items Selected
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
                  <div className="flex items-center gap-2 font-medium">
                    <input type="checkbox" />
                    <span>Select All</span>
                  </div>

                  {filteredValues.map((value) => (
                    <div
                      key={value}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(value)}
                        onChange={() => handleCheck(value)}
                      />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Close & Apply INSIDE expanded */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setOpenFilter(null)}
                    className="px-4 py-1 border-2 border-[#cfdde5] rounded-md text-[#0a3ca2]"
                  >
                    Close
                  </button>
                  <button className="px-4 py-1 bg-gray-400 text-white rounded-md">
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
