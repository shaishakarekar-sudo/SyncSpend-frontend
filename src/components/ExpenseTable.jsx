import React from "react";

export default function ExpenseTable({ expenses }) {
  if (!expenses.length) return <p>No expenses found.</p>;

  return (
    <div className="mt-8 bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Expense Table</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Title</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Currency</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e._id} className="hover:bg-gray-50">
              <td className="border p-2">{e.title}</td>
              <td className="border p-2">{e.category}</td>
              <td className="border p-2 font-medium">{e.amount}</td>
              <td className="border p-2">{e.currency || "₹"}</td>
              <td className="border p-2">
                {new Date(e.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
