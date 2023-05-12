import React from "react";
import Contact from "./Contact";
import RightFrame from "../assets/bg.png";

const BottomGrid = () => {
  return (
    <div className="contact">
      <div className="left-bottom-cont">
        <img src={RightFrame} alt="frame" className="left-img" />
      </div>
      <div className="right-bottom-cont">
        <Contact />
      </div>
    </div>
  );
};

export default BottomGrid;
