import React from "react";
import "./Searchbar.css";
import searchIcon from "../../assets/Icons/search.svg";
import Icon from "../Icon/Icon";
const Searchbar = () => {
  return (
    <div className="search-bar-wrapper">
      <input type="text" placeholder="Search" />
      <div className="icon-section">
        <Icon icon={searchIcon} />
      </div>
    </div>
  );
};

export default Searchbar;
