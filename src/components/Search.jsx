import React, { useContext } from 'react';
import "../style/Search.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TaskContext from '../context/TaskContext';


export const Search = ({ onSearch }) => {
    const {items} = useContext(TaskContext);
    console.log("items", items)

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
                    className="search-input bg-violet-100 w-64 h-8 "
                    placeholder="Search"
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)} />
                <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <button className="find text-violet-900 bg-violet-200 w-20 h-8 mb-2 font-mono" onClick={e => setSearchItem(e.target.value)} >Find</button>
            </form>
        </div>
       
    )
}
export default Search;