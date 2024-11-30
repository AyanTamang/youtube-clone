import React from "react";
import "./Sidebar.css";
import homeIcon from "../../assets/Icons/home.svg";
import Menu from "../Menu/Menu";
import Icon from "../Icon/Icon";
import shortsIcon from "../../assets/Icons/shorts.svg";
import thumbIcon from "../../assets/Icons/thumb.svg";
import logoutIcon from "../../assets/Icons/logout.svg";

import musicIcon from "../../assets/Icons/music.svg";
import settingsIcon from "../../assets/Icons/settings.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <Menu title="Home" icon={homeIcon} />
      <Menu title="YouTube Shorts" icon={shortsIcon} />
      <Menu title="Musics" icon={musicIcon} />
      <Menu title="Liked videos" icon={thumbIcon} />
      <div className="logout-section">
        <Menu title="Settings" icon={settingsIcon} />
        <Menu title="Logout" icon={logoutIcon} />
      </div>
    </div>
  );
};
export default Sidebar;
