import React from 'react';

const SearchBar = (props) => {
    return(
        <form>
            <input
            onChange = {props.changeSearchTermState}
            type = "text"
            placeholder="Start typing to search images...">                
            </input>
            <div className="ResultCount">{props.results} Photos of {props.value === ""? "Piano" : props.value} Found</div>
        </form>
    )
};

export default SearchBar;