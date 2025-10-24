import React, { useState } from "react";

const SplitBills = () => {
  const [people, setPeople] = useState(["You"]);
  const [payer, setPayer] = useState("You");
  const [total, setTotal] = useState("");
  const [balances, setBalances] = useState({});

  // Add a new person to split with
  const handleAddPerson = () => {
    const name = prompt("Enter person's name:");
    if (name && !people.includes(name.trim()) && name.trim() !== "") {
      setPeople([...people, name.trim()]);
    }
  };

  // Perform the actual split calculation
  const handleSplit = () => {
    if (!total || isNaN(total) || total <= 0) {
      alert("Enter a valid total amount.");
      return;
    }

    const splitAmount = parseFloat(total) / people.length;
    const newBalances = {};

    people.forEach((person) => {
      if (person === payer) {
        newBalances[person] = (total - splitAmount).toFixed(2);
      } else {
        newBalances[person] = (-splitAmount).toFixed(2);
      }
    });

    setBalances(newBalances);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-5 flex items-center gap-2">
        💸 Split Bills
      </h2>

      <div className="space-y-4">
        {/* Total Input */}
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="Enter total amount"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="border p-2 rounded-lg w-full dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleAddPerson}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Person
          </button>
        </div>

        {/* Payer Selection */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-700 dark:text-gray-300">
            Paid by:
          </label>
          <select
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            className="border p-2 rounded-lg dark:bg-gray-700 dark:text-white"
          >
            {people.map((p, idx) => (
              <option key={idx} value={p}>
                {p}
              </option>
            ))}
          </select>
          <button
            onClick={handleSplit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Split
          </button>
        </div>
      </div>

      {/* Balances Display */}
      {Object.keys(balances).length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Balances:
          </h3>
          <ul className="space-y-2">
            {Object.entries(balances).map(([name, balance]) => (
              <li
                key={name}
                className={`font-medium ${
                  balance < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                {name} {balance < 0 ? "owes" : "gets back"} ₹
                {Math.abs(balance)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SplitBills;
