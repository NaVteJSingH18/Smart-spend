import React from 'react'
import { useState } from 'react'

const TransactionForm = ({addTransaction,deleteTransaction}) => {
  const [title,setTitle]= useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

return (
  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

    <h2 className="text-2xl font-bold mb-6">
      Add Transaction
    </h2>

    <div className="space-y-4">

      <input
        type="text"
        placeholder="Transaction Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          p-3
          bg-white
        "
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button
        onClick={() => {
          const newTransaction = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type,
          };

          addTransaction(newTransaction);

          setTitle("");
          setAmount("");
          setType("Income");
        }}
        className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-lg
          font-semibold
          hover:bg-blue-700
          transition
        "
      >
        + Add Transaction
      </button>

    </div>

  </div>
);
}

export default TransactionForm
