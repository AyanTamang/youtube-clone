import React from "react";
import youtubeLogo from "../../assets/logo/youtube-logo.svg";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={youtubeLogo} />

      <p>YouTube</p>
    </div>
  );
};

export default Logo;
