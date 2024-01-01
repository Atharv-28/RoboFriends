import React from "react";
import "./searchbox.css";

const Searchbox =({searchfield, searchChange}) => {
    return (
        <input 
            className="sb" 
            type="search" 
            placeholder="Search for Robots" 
            onChange={searchChange}
        />
    )
}

export default Searchbox;