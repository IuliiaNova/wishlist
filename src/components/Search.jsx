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
        
        <div className="input-with-icon flex items-center justify-right m-4 ml-10">
            <form onSubmit={userSearch}>
                <input
                    type="text"
                    className="search-input bg-pink-100 w-64 h-8 rounded-lg"
                    placeholder="Search"
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)} />
                <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <button className="border-2 text-pink-900 bg-pink-200 w-20 h-8 rounded-lg mb-2">Find</button>
            </form>
        </div>
       
    )
}
export default Search;