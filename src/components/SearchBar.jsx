import React from 'react'

const SearchBar = ({search,setSearch}) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
      <input 
      type="text"
      placeholder='Search ...'
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}}
      className='
          w-full
          border
          border-gray-300
          rounded-lg
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500'
       />
    </div>
  );
};

export default SearchBar
