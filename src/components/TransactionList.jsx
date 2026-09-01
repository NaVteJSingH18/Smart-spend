import TransactionItem from "./TransactionItem";

const TransactionList = ({
  transactions,
  deleteTransaction,
  setEditingTransaction,
}) => {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (

        <div className="text-center py-10 text-gray-400">
          <p className="text-5xl">📭</p>

          <p className="mt-3">
            No transactions yet.
          </p>
        </div>

      ) : (

        transactions.map(transaction => (
          <div key={transaction.id}>
            <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
          <button
            onClick={() => setEditingTransaction(transaction)}
            >
              ✏ Edit
          </button>
          </div>
          

        ))

      )}

    </div>
  );
};

export default TransactionList;