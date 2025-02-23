import React from 'react'
import SearchManufacturer from './SearchManufacturer'

function SearchBar() {
  const handleSearch = () =>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar_item'>
        <SearchManufacturer />
      </div>
    </form>
  )
}

export default SearchBar