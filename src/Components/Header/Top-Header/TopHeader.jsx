import React from "react";
import "./topHeader.css";
import Truck from "../../../Assets/Truck.svg";
import Fb from "../../../Assets/Fb.svg";
import Instagram from "../../../Assets/Instagram.svg";
import Twitter from "../../../Assets/Twitter.svg";
import LinkedIn from "../../../Assets/LinkedIn.svg";

function TopHeader() {
  return (
    <div className="top-header-main-container">
      <div className="left-side-content-container">
        <div className="delivery-truck-container">
          <img src={Truck} alt="" />
          <div className="top-header-text">Free Delivery</div>
        </div>
        <div className="divider-line"></div>
        <div className="top-header-text">Return Policy</div>
      </div>
      <div className="right-side-content-container">
        <div className="top-header-text">Login</div>
        <div className="follow-us-social-website-container">
          <div className="top-header-text">Follow US</div>
          <div className="social-website-container">
            <img src={Fb} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
