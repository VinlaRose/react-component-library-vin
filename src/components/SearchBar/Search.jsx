
import React, { useState } from 'react';

import items from './items';
import './Search.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    
    const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items
    .filter((item) => item.toLowerCase().includes(searchQuery));
    setFilteredItems(filtered)
   
    
  };

  const handleRedirect = (item) => {
    console.log(item);

    
    const routeMap = {
        Avatar: '/avatars',
        Alert: '/alerts',
        Badge: '/badges',
        'Badge on Icons': '/badges',
        'Badge on Avatars': '/badges',
        Button: '/buttons',
        Primary: '/buttons',
        Link: '/buttons',
        'Icon Button': '/buttons',
        'Floating Action Button': '/buttons',
        Card: '/cards',
        'Cards with badges': '/cards',
        'Cards with dismiss': '/cards',
        'Cards with text overlay': '/cards',
        'Text only cards': '/cards',
        Vertical: '/cards',
        'Horizontal cards': '/cards',
        'Cards with shadow': '/cards',
        Headings: '/headings',
        Text: '/texts',
        Image: '/images',
        'Responsive image': '/images',
        'Round image': '/images',
      };

    
    const route = routeMap[item] || '/';
    console.log(route)
    navigate(route);
    setSearchQuery("")
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for components..."
        onChange={handleSearch}
        value={searchQuery}
      />
      
      {
        searchQuery.length > 0 && (
            <ul className="search-results">
        {
            filteredItems.length > 0 && filteredItems.map(item => (
                <li className="routing-list" key={item} onClick={() => handleRedirect(item)}>
              {item}
            </li>
            ))
        }
       
      </ul>
        )
      }
      
    </div>
  );
};

export default SearchBar;
