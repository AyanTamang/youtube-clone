import React from "react";
import Icon from "../Icon/Icon";
import hamBurgerIcon from "../../assets/Icons/hamburger.svg";
import videoIcon from "../../assets/Icons/video.svg";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import voiceIcon from "../../assets/Icons/voice.svg";
import bellIcon from "../../assets/Icons/bell.svg";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goToUpload = () => {
    navigate("upload");
  };

  return (
    <div className="navbar-wrapper">
      <div className="bar-section">
        <Icon icon={hamBurgerIcon} />
        <Logo />
      </div>
      <div className="search-bar-section">
        <Searchbar />
        <Icon icon={voiceIcon} />
      </div>

      <div className="account-section">
        <Icon icon={videoIcon} title="upload your video" onClick={goToUpload} />

        <Icon icon={bellIcon} title="notifications" />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
