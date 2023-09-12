import React, { useState } from 'react';
import './Search.css'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      {/* <button onClick={handleSearch} className="search-button">
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;
