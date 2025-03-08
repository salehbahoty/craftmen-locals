import React from 'react';

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for services or providers..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
