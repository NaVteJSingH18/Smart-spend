import React from 'react'

const SortBar = ({sortBy,setSortBy}) => {
  return (
    <div className="w-full sm:w-auto min-w-[170px]">
      <select 
      value={sortBy}
      onChange={(e)=>setSortBy(e.target.value)}
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
        <option value="Newest">Newest First</option>
        <option value="Oldest">Oldest First</option>
        <option value="Highest Amount">Highest Amount</option>
        <option value="Lowest Amount">Lowest Amount</option>
      </select>
    </div>
  )
}

export default SortBar
