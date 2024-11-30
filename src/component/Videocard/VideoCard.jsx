import React from "react";
import "./VideoCard.css";
import Icon from "../Icon/Icon";
import dotIcon from "../../assets/Icons/dot.svg";

const VideoCard = (props) => {
  return (
    <div className="videocard-wrapper">
      <img src={props.image} />
      <div className="title-section">
        <h4>{props.title}</h4>
        <Icon icon={dotIcon} />
      </div>
      <footer>
        <p className="grey">{props.channelName}</p>
        <div className="views-section">
          <p className="grey">{props.views} views</p>
          <p className="grey">{props.publishedTime} ago </p>
        </div>
      </footer>
    </div>
  );
};

export default VideoCard;
