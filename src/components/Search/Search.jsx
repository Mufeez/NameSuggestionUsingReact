import React from "react";
import "./Search.css";

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search-box-container">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Type Keywords"
        className="search-input"
      ></input>
    </div>
  );
};

export default SearchBox;
