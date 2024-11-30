import React from "react";

import "./Icon.css";
const Icon = (props) => {
  return (
    <abbr onClick={props.onClick} title={props.title}>
      <div className="icon-wrapper">
        <img src={props.icon} />
      </div>
    </abbr>
  );
};

export default Icon;
