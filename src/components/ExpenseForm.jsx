import React, { useState } from "react";
import API from "../utils/axios";

export default function ExpenseForm({ onExpenseAdded }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await API.post("/expenses", {
        title,
        amount: parseFloat(amount),
        category,
      });
      onExpenseAdded(response.data);
      setTitle("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Failed to add expense. Please check the server connection.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Add Expense
      </button>
    </form>
  );
}
