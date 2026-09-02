import React from 'react'

const FilterBar = ({filter,setFilter}) => {
  return (
    <div className="w-full sm:w-auto min-w-[150px]">
      <select 
        value={filter}
        onChange={(e)=> setFilter(e.target.value)}
        className="
          w-full
          border
          border-gray-200
          rounded-xl
          p-3
          shadow-sm
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          cursor-pointer
        "
      >
        <option value="All">All Types</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  )
}

export default FilterBar
