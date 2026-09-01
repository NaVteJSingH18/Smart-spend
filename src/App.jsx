import React from "react";
import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SummaryCard from "./components/SummaryCard";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const income = transactions.reduce((total, transaction) => {
    if (transaction.type === "Income") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const expense = transactions.reduce((total, transaction) => {
    if (transaction.type === "Expense") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const INITIAL_BALANCE = 50000;
  const balance = INITIAL_BALANCE + income - expense;

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || transaction.type === filter;

    return matchesSearch && matchesFilter;
  });



  const sortedTransactions = [...filteredTransactions];

  sortedTransactions.sort((a, b) => {
    if (sortBy === "Highest Amount") {
      return b.amount - a.amount;
    }

    if (sortBy === "Lowest Amount") {
      return a.amount - b.amount;
    }

    if (sortBy === "Newest") {
      return b.id - a.id;
    }
    if (sortBy === "Oldest") {
      return a.id - b.id;
    }
    return 0;
  });

  function addTransaction(newTransaction) {
    if (newTransaction.title && newTransaction.amount > 0) {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        newTransaction,
      ]);
    }
  }

  function deleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  }
  function updateTransaction(updatedTransaction) {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) => {
        if (transaction.id === updatedTransaction.id) {
          return updatedTransaction;
        }

        return transaction;
      }),
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
          💰 SmartSpend
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <SummaryCard
            title="Current Balance"
            amount={balance}
            color="text-green-600"
          />

          <SummaryCard title="Income" amount={income} color="text-blue-600" />

          <SummaryCard title="Expense" amount={expense} color="text-red-600" />
        </div>
        <SearchBar search={search} setSearch={setSearch} />

        <div className="flex gap-4 mb-6">
          <FilterBar filter={filter} setFilter={setFilter} />
          <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TransactionForm
            addTransaction={addTransaction}
            updateTransaction={updateTransaction}
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />
          <div className="md:col-span-2">
            <TransactionList
              transactions={sortedTransactions}
              deleteTransaction={deleteTransaction}
              setEditingTransaction={setEditingTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
