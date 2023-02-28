import React, { useContext, useState } from 'react';
import "../style/Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TaskContext from '../context/TaskContext';


export const Search = () => {
    const { searchItem, setSearchItem, searchItems } = useContext(TaskContext);

    return (
        <div className="input-with-icon flex items-center justify-right m-4 ml-10">
            <form onSubmit={searchItems} >
                <input
                    type="text"
                    value={searchItem}
                    className="search-input bg-violet-100 w-80 h-8 "
                    placeholder="Search"
                    onChange={e => setSearchItem(e.target.value)} />
                <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <button className="find text-violet-900 bg-violet-200 w-20 h-8 mb-2 font-mono" >Find</button>
            </form>
        </div>

    )
}
export default Search;
