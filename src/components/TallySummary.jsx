import React from "react";

export default function TallySummary({ expenses }) {
  const totalCredit = expenses
    .filter((e) => e.type === "credit")
    .reduce((acc, e) => acc + e.amount, 0);

  const totalDebit = expenses
    .filter((e) => e.type === "debit")
    .reduce((acc, e) => acc + e.amount, 0);

  const balance = totalCredit - totalDebit;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Tally Summary</h2>
      <div className="text-left space-y-1">
        <p>💵 <strong>Total Credit (Income):</strong> ₹{totalCredit}</p>
        <p>💸 <strong>Total Debit (Expense):</strong> ₹{totalDebit}</p>
        <p>🧾 <strong>Balance:</strong> ₹{balance}</p>
      </div>
    </div>
  );
}
import React from "react";

export default function TallySummary({ expenses }) {
  const totalCredit = expenses
    .filter((e) => e.type === "credit")
    .reduce((acc, e) => acc + e.amount, 0);

  const totalDebit = expenses
    .filter((e) => e.type === "debit")
    .reduce((acc, e) => acc + e.amount, 0);

  const balance = totalCredit - totalDebit;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Tally Summary</h2>
      <div className="text-left space-y-1">
        <p>💵 <strong>Total Credit (Income):</strong> ₹{totalCredit}</p>
        <p>💸 <strong>Total Debit (Expense):</strong> ₹{totalDebit}</p>
        <p>🧾 <strong>Balance:</strong> ₹{balance}</p>
      </div>
    </div>
  );
}
