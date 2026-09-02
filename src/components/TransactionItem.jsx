import { FaTrash, FaEdit } from "react-icons/fa";

const TransactionItem = ({ transaction, deleteTransaction, setEditingTransaction }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex justify-between items-center hover:shadow-md hover:border-gray-200 transition-all mb-3 group">

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-800">
          {transaction.title}
        </h3>

        <div className="flex items-center gap-4 mt-1">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              transaction.type === "Income"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {transaction.type}
          </span>
          <span className="text-gray-500 font-medium">
            ₹{transaction.amount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setEditingTransaction(transaction)}
          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete"
        > 
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;