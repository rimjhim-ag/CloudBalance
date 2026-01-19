import React from "react";

const AWSTable = ({ columns = [], rows = [] }) => {
  if (!columns.length || !rows.length) {
    return <div className="text-gray-500 px-10">No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-[80%] border border-gray-200 rounded-lg mx-10 border-collapse">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#0a3ca2] divide-x-2 divide-white">
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-2 text-white text-sm font-semibold text-center"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-white even:bg-[#f8f7fc] divide-x-2 divide-white text-center"
            >
              {columns.map((col) => (
                <td key={col.key} className="p-3 text-sm">
                  {col.key === "status" ? (
                    <span
                      className={`font-semibold px-3 py-1 rounded-full text-xs
                        ${
                          row[col.key] === "RUNNING"
                            ? "text-green-700 bg-green-100"
                            : "text-red-700 bg-red-100"
                        }`}
                    >
                      {row[col.key]}
                    </span>
                  ) : (
                    row[col.key] ?? "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AWSTable;
