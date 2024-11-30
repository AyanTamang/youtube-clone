import React from "react";
import Icon from "../Icon/Icon";
import homeIcon from "../../assets/Icons/home.svg";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="menu-wrapper">
      <Icon icon={props.icon} />
      <p>{props.title}</p>
    </div>
  );
};

export default Menu;
