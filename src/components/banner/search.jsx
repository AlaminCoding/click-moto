import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  return (
    <div className="search-box">
      <h2>
        Your local source of high quality images and videos directly from their
        creators
      </h2>
      <div className="search-input">
        <input type="text" placeholder="Search photos and videos" />
        <BiSearchAlt2 className="search-icon" />
      </div>
      <p>
        <b>Recommended: </b>
        <span> Summer, Food, Covid-19, React State, Love</span>
      </p>
    </div>
  );
};

export default Search;
