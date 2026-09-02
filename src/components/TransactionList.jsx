import TransactionItem from "./TransactionItem";

const TransactionList = ({
  transactions,
  deleteTransaction,
  setEditingTransaction,
}) => {

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <div className="text-center py-16 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-5xl mb-4 grayscale opacity-60">📭</p>
          <p className="text-gray-500 font-medium">
            No transactions yet.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Add some to get started!
          </p>
        </div>
      ) : (
        <div className="space-y-1 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              setEditingTransaction={setEditingTransaction}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;