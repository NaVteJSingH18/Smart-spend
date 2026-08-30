import { FaTrash } from "react-icons/fa";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition mb-4">

      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          {transaction.title}
        </h3>

        <div className="flex items-center gap-9  mt-1">

          <span
            className={`text-sm font-medium  px-2 py-1 rounded-full ${
              transaction.type === "Income"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {transaction.type}
          </span>

          <span className="text-gray-500">
            ₹{transaction.amount.toLocaleString()}
          </span>

        </div>
      </div>

      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="bg-red-500 flex gap-2.5 items-center hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
      > 
      <FaTrash /> Delete
      </button>

    </div>
  );
};

export default TransactionItem;