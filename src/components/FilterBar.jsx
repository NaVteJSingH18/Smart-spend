import React from 'react'

const FilterBar = ({filter,setFilter}) => {
  return (
    <div>
      <select value={filter}
      onChange={(e)=>  setFilter(e.target.value) }>
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  )
}

export default FilterBar
