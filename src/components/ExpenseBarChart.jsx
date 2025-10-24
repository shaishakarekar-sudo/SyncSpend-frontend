import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ExpenseBarChart({ expenses }) {
  if (!expenses.length) return null;

  const monthlyTotals = expenses.reduce((acc, e) => {
    const month = new Date(e.createdAt).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + e.amount;
    return acc;
  }, {});

  const data = Object.keys(monthlyTotals).map((m) => ({
    month: m,
    total: monthlyTotals[m],
  }));

  return (
    <div className="mt-8 bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Monthly Spending</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
