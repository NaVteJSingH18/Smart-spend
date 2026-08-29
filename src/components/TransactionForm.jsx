import React from 'react'
import { useState } from 'react'

const TransactionForm = ({addTransaction}) => {
  const [title,setTitle]= useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  return (
    <div>
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


    <select value={type} onChange={(e) => setType(e.target.value)}  >
      <option value="Income" >Income</option>
      <option value="Expense">Expense</option>
    </select>

    <button onClick={()=>{
        
        const newTransaction = {
            title,
            amount: Number(amount),
            type,
        };
        addTransaction(newTransaction);
        setTitle("");
        setAmount("");
        setType("Income");
    }
    } >
        Add Transaction
    </button>
    

    </div>
  )
}

export default TransactionForm
