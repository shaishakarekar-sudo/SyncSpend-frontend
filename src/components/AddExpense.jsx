import React, { useState } from "react";
import { initAPI } from "../utils/axios";

const AddExpense = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill all fields");

    const newExpense = {
      title,
      amount: Number(amount),
      category,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      await onAdd(newExpense);
      setTitle("");
      setAmount("");
      setCategory("Food");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 mt-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">
        ✨ Add Expense
      </h2>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border rounded-md"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-3 border rounded-md"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-3 border rounded-md"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        + Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
