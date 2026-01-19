import React from "react";
import { filters } from "../utils/filterConstant";
import { getMonthsBetween, calculateTotals } from "../utils/costHelpers";



const CostTable = ({ selectedFilter, data, startDate, endDate }) => {
  if (!startDate || !endDate) return <p>Please select start and end dates</p>;



const months = getMonthsBetween(startDate, endDate);
const { columnTotals, grandTotal } = calculateTotals(data, months);

const label = filters.find(f => f.value === selectedFilter)?.name;




  return (
    <div className="p-4 bg-white rounded-md overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">{label}</th>
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
          {data.length > 0 ? (
            data.map((row) => {
              const rowTotal = months.reduce(
                (sum, month) => sum + (row.monthlyCost[month] || 0),
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
            })
          ) : (
            <tr>
              <td className="border px-4 py-10 text-center" colSpan={months.length + 2}>
                No data available
              </td>
            </tr>
          )}
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
