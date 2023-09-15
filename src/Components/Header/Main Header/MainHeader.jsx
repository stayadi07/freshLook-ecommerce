import React from "react";
import "./mainheader.css";

function MainHeader() {
  return (
    <div className="main-header-wrapper">
      <div className="main-header-container">
        <div className="main-header-text">ShopKart</div>
        <div className="wishlist-bag-box">
          <div className="wishlist-bag-text">WISHLIST(0)</div>
          <div className="wishlist-bag-text">BAG(0)</div>
        </div>
      </div>
      <div className="main-header-divider-line"></div>
    </div>
  );
}

export default MainHeader;
