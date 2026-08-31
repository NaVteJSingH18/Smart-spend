import React from 'react'
import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SummaryCard from './components/SummaryCard';
import { useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import FilterBar from './components/FilterBar';
const App = () => {

const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
const [transactions,setTransactions]= useState([]);

const income = transactions.reduce((total,transaction)=>{
        if(transaction.type==="Income"){
            return total + transaction.amount;
        }
      return total;
    },0);

const expense = transactions.reduce((total,transaction)=>{
        if(transaction.type==="Expense"){
            return total + transaction.amount;
        }
      return total ;
    },0);



const balance = 50000  + income - expense;

  useEffect(() => {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
  }, [transactions]);

       const filteredTransactions = transactions.filter((transaction)=>{
           
            const matchesSearch = transaction.title.toLowerCase().includes(search.toLowerCase()) ;
            const matchesFilter =
                    filter === "All" || transaction.type === filter;
                
            return matchesSearch && matchesFilter;
 } );

      function addTransaction(newTransaction){
        if(newTransaction.title && newTransaction.amount>0){  
            setTransactions(prevTransactions => [
               ...prevTransactions,
               newTransaction,
            ]);           
        } 
      } 

      function deleteTransaction(id){
          setTransactions(prevTransactions =>
              prevTransactions.filter(transaction => transaction.id !== id)
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

    <SummaryCard
        title="Income"
        amount={income}
        color="text-blue-600"
    />

    <SummaryCard
        title="Expense"
        amount={expense}
        color="text-red-600"
    />

    <SearchBar
    search={search}
    setSearch={setSearch}
    />
       <TransactionForm
           addTransaction={addTransaction}
       />
       <FilterBar/>
       <TransactionList
           transactions={filteredTransactions}
           deleteTransaction={deleteTransaction}
       /> 

       </div>
           </div>
           </div>
  )
}

export default App
