import React, { useEffect, useState } from "react";
import { initAPI } from "../utils/axios";
import Navbar from "../components/Navbar";
import AddExpense from "../components/AddExpense";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseChart from "../components/ExpenseChart";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const fetchExpenses = async () => {
    try {
      const api = await initAPI();
      const res = await api.get("/expenses");
      setExpenses(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching expenses:", err);
      setError("Failed to load expenses — check backend connection.");
    }
  };

  const handleExpenseAdded = async (newExpense) => {
    try {
      const api = await initAPI();
      await api.post("/expenses", newExpense);
      fetchExpenses(); // refresh after adding
    } catch (err) {
      console.error("Error adding expense:", err);
      alert("Could not add expense — please try again.");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          💰 SyncSpend Dashboard
        </h1>
        {error && <p className="text-center text-red-500 mt-2">{error}</p>}
        <AddExpense onAdd={handleExpenseAdded} />
        <ExpenseTable expenses={expenses} />
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpensesPage;
