import React from 'react'
import Card from './components/Card'
import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BalanceCard from './components/BalanceCard';
import { useEffect } from 'react';
const App = () => {

  const [transactions,setTransactions]= useState([]);
  const [balance, setBalance] = useState(50000);
  useEffect(() => {
    console.log("Balance changed:", balance);
  }, [balance]);

      function addBalance(amount){
        setBalance(prevBalance => prevBalance + amount);
      }

      function addExpense(amount){
        setBalance(prevBalance => prevBalance - amount);
      }

      function addTransaction(newTransaction){
        if(newTransaction.title && newTransaction.amount>0){
          
          if(newTransaction.type==="Income"){
          addBalance(Number(newTransaction.amount));
          }
          else{
          addExpense(Number(newTransaction.amount));
          }
          setTransactions([...transactions,newTransaction]);
        } 
      }
  return (
    <div>
       <BalanceCard balance={balance}  />
       <TransactionForm
           addTransaction={addTransaction}
       />
       <TransactionList
           transactions={transactions}
       />
           </div>
  )
}

export default App
