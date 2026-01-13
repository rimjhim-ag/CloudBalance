import React from "react";
import Loader from "./Loader";

const CostTable = ({ data}) => {
 

  //  Collect all unique months from the data
  const monthSet = new Set();
  data.forEach((item) => {
    Object.keys(item.monthlyCost).forEach((month) => monthSet.add(month));
  });
  const months = Array.from(monthSet); // sorted months

  // Calculate column totals
  const columnTotals = {};
  months.forEach((month) => {
    columnTotals[month] = data.reduce(
      (sum, item) => sum + (item.monthlyCost[month] || 0),
      0
    );
  });

  //  Calculate grand total
  const grandTotal = Object.values(columnTotals).reduce((a, b) => a + b, 0);



  return (
    <div className="p-4 bg-white rounded-md overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Service</th>
            {months.map((month) => (
              <th key={month} className="border px-4 py-2 text-right">
                {month}
              </th>
            ))}
            <th className="border px-4 py-2 text-right">Total</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row) => {
            const rowTotal = Object.values(row.monthlyCost).reduce(
              (a, b) => a + b,
              0
            );
            return (
              <tr key={row.groupBy} className="hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{row.groupBy}</td>
                {months.map((month) => (
                  <td key={month} className="border px-4 py-2 text-right">
                    ${((row.monthlyCost[month] || 0).toLocaleString())}
                  </td>
                ))}
                <td className="border px-4 py-2 text-right font-semibold text-blue-600">
                  ${rowTotal.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>

        {/* Table Footer - Column totals */}
        <tfoot>
          <tr className="bg-gray-100 font-medium">
            <td className="border px-4 py-2">Total</td>
            {months.map((month) => (
              <td key={month} className="border px-4 py-2 text-right">
                ${columnTotals[month].toLocaleString()}
              </td>
            ))}
            <td className="border px-4 py-2 text-right font-semibold text-blue-600">
              ${grandTotal.toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CostTable;
