import React from "react";
import { FiSearch } from "react-icons/fi";
import "./search.css";
export const Search = () => {
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="What are you looking for "
      />
      
      <FiSearch className="icon" />
    </div>
  );
};
