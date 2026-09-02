import React from 'react'

const SearchBar = ({search,setSearch}) => {
  return (
    <div className='w-full'>
      <input 
      type="text"
      placeholder='Search transactions...'
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}}
      className='
          w-full
          border
          border-gray-200
          rounded-xl
          p-3
          pl-4
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition'
       />
    </div>
  );
};

export default SearchBar
