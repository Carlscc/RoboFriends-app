import React from 'react';
import './search-box.style.css';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div>
        <input
        className='search-box'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
        />
        </div>

    );
}

export default SearchBox;