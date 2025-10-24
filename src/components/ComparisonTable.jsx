import React from "react";

function ComparisonTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Monthly Comparison
      </h2>
      <table className="w-full border">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-2">Month</th>
            <th className="p-2">Total Expenses (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t text-center">
            <td className="p-2">Last Month</td>
            <td className="p-2">₹8,000</td>
          </tr>
          <tr className="border-t text-center">
            <td className="p-2">This Month</td>
            <td className="p-2">₹6,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
