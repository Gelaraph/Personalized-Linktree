import React from "react";
import Links from "./Links";
import RightFrame from "../assets/frame.jpeg";

const TopGrid = () => {
  return (
    <div className="topgrid-cont">
      <div>
        <Links />
      </div>
      <div className="img-grid">
        <img src={RightFrame} alt="frame" className="rightframe" />
      </div>
    </div>
  );
};

export default TopGrid;
