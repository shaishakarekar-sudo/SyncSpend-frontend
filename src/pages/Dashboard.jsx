import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Fetch user expenses
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const res = await api.get("/api/expenses");
        setExpenses(res.data);
      } catch {
        alert("Failed to load expenses");
      }
    };
    loadExpenses();
  }, []);

  // Add new expense
  const addExpense = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/expenses", { title, amount, category });
      setExpenses([...expenses, res.data]);
      setTitle("");
      setAmount("");
      setCategory("");
    } catch {
      alert("Error adding expense");
    }
  };

  if (!user) return <p>Please log in first.</p>;

  return (
    <div className="p-6">
      <h2>Welcome, {user.name} 👋</h2>
      <button onClick={logout} className="mb-4">Logout</button>

      <form onSubmit={addExpense} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <h3>Your Expenses</h3>
      <ul>
        {expenses.map((ex) => (
          <li key={ex._id}>
            {ex.title} – ₹{ex.amount} ({ex.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
