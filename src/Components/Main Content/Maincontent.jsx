import React from "react";
import "./mainContent.css";
import Products from "./Products Listing/Products";

function Maincontent() {
  return (
    <div className="main-content-wrapper">
      <div className="main-content-header-wrapper">
        <div className="header-name-divider-container">
          <div className="main-content-header-name">New products</div>
          <div className="star-divider-line-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z"
                fill="black"
              />
            </svg>
            <div className="main-content-divider-line"></div>
          </div>
        </div>
        <div className="arrows-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="6"
            viewBox="0 0 56 6"
            fill="none"
          >
            <path
              d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
              fill="#161615"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="6"
            viewBox="0 0 56 6"
            fill="none"
          >
            <path
              d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
              fill="#161615"
            />
          </svg>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Maincontent;
