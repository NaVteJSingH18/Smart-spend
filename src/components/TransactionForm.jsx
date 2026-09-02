import React from "react";
import { useState, useEffect } from "react";

const TransactionForm = ({ addTransaction, updateTransaction, editingTransaction,setEditingTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  useEffect(() => {
  if (editingTransaction) {
    setTitle(editingTransaction.title);
    setAmount(editingTransaction.amount);
    setType(editingTransaction.type);
  }
}, [editingTransaction]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          {editingTransaction ? "Edit Transaction" : "Add Transaction"}
        </h2>
        {editingTransaction && (
          <button
            onClick={() => {
              setEditingTransaction(null);
              setTitle("");
              setAmount("");
              setType("Income");
            }}
            className="text-sm text-gray-400 hover:text-gray-600 transition"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="e.g. Salary, Groceries"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
            w-full
            border
            border-gray-200
            rounded-xl
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
            bg-gray-50
            focus:bg-white
          "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="
              w-full
              border
              border-gray-200
              rounded-xl
              p-3
              pl-8
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
              bg-gray-50
              focus:bg-white
            "
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="
            w-full
            border
            border-gray-200
            rounded-xl
            p-3
            bg-gray-50
            focus:bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <button
          onClick={() => {
            const newTransaction = {
              id: editingTransaction ? editingTransaction.id : Date.now(),
              title,
              amount: Number(amount),
              type,
            };

            if (editingTransaction) {
              updateTransaction(newTransaction);
              setEditingTransaction(null);
              
            } else {
              addTransaction(newTransaction);
            }
            setTitle("");
            setAmount("");
            setType("Income");
          }}
          className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          font-semibold
          shadow-md
          shadow-blue-500/30
          hover:bg-blue-700
          hover:shadow-blue-600/40
          transition-all
          duration-300
          active:scale-[0.98]
        "
        >
          {editingTransaction ? "Save Changes" : "+ Add Transaction"}
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
