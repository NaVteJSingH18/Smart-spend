import React from 'react'
import Card from './components/Card'
import { useState } from 'react';

// const cards = [
  //   {
    //     title: "Current Balance",
    //     amount: 50000,
    //   },
    //   {
      //     title: "Income",
      //     amount: 75000,
//   },
//   {
//     title: "Expense",
//     amount: 25000,
//   },
//   {
//     title: "Savings",
//     amount: 15000,
//   },
// ];
const App = () => {

  const [balance, setBalance] = useState(50000);
  const [title,setTitle]= useState("");
  const [amount, setAmount] = useState("");
  const [transactions,setTransactions]= useState([]);
function addBalance(){
setBalance(balance+5000);
}
function addExpense(){
  setBalance(balance-1000);
}
function addTransaction(){
  const newTransaction = {
    title,
    amount
  };
  setTransactions([...transactions,newTransaction]);
  setTitle("");
setAmount("");
}
  return (
    <div>
      {/* {cards.map((card) => {
    return (
        <Card
            key={card.title}
          title={card.title}
          amount={card.amount}
        />
    );
})  } */}
<Card
    title="Current Balance"
    amount={balance}
/>
    <button onClick={addBalance}>
    Add Income
</button>
<button onClick ={addExpense}>Add Expense</button>
        <p>Transaction:{title}</p>
        <p>amount:{amount}</p>
<input type="text"
        placeholder="Transaction Title"
    value={title}
    onChange={(event)=>{

      setTitle(event.target.value)
    }}/>
    <input type="text"
        placeholder="add amount"
    value={amount}
    onChange={(event)=>{

      setAmount(event.target.value)
    }}/>
  
  <button onClick={addTransaction}>Add Transaction</button>
   { transactions.map((t)=>{
    return  <Card 
    
    key={t.title}
      title={t.title}
      amount={t.amount}
      />

    })}
    </div>
  )
}

export default App
