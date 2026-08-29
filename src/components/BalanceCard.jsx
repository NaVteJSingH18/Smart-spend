import React from 'react'
import { useState } from 'react'

import Card from './Card';
const BalanceCard = ({balance}) => {

  return (
    <div>
      <Card
    title="Current Balance"
    amount={balance}
/>
    </div>
  )
}

export default BalanceCard
