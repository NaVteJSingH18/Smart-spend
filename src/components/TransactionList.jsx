import React from 'react'
import { useState } from 'react';
import Card from './Card';
const TransactionList = ({transactions}) => {


  return (
    <div>
          {
      transactions.length===0
      && <p>No transactions yet.</p>
  }
      { transactions.map((t)=>{
        return <Card 
            key={t.title}
            title={t.title}
            amount={t.amount}
               />

    })}
    </div>
  )
}

export default TransactionList
