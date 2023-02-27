import React from 'react';
import "../style/Search.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const Search = ({ onSearch }) => {

    const [searchItem, setSearchItem] = useState('');
    
    function userSearch(e) {
        e.preventDefault();
        onSearch(searchItem);
      }



    return (
        
        <div className="input-with-icon">
            <form onSubmit={userSearch}>
                <input
                    type="text"
                    className="search-input bg-pink-100"
                    placeholder="Search"
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)} />
                <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <button className="border-2 text-pink-900 bg-pink-200 w-20 rounded-lg mb-2">Find</button>
            </form>
        </div>
       
    )
}
export default Search;