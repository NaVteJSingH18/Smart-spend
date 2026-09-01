import React from 'react'

const SortBar = ({sortBy,setSortBy}) => {
  return (
    <div>
      <select 
      value={sortBy}
      onChange={(e)=>setSortBy(e.target.value)}
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Highest Amount">Highest Amount</option>
        <option value="Lowest Amount">Lowest Amount</option>
      </select>

    </div>

  )
}

export default SortBar
