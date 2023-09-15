import React from "react";
import "./banner.css";
import Model from "../../Assets/Banner.png";

function Banner() {
  return (
    <div className="banner-container">
      <div className="background-orange">
        <div className="overlay-content">
          <div className="fresh-text">Fresh</div>
          <div className="year-text">2022</div>
          <div className="look-text">Look</div>

          <div className="starline-divider-container">
            <div className="star-divider-line"></div>
            <div className="star-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="91"
                viewBox="0 0 64 91"
                fill="none"
                style={{ paddingTop: "12px" }}
              >
                <path
                  d="M32 0.972351L34.0365 42.6785L64 45.5131L34.0365 48.3476L32 90.0538L29.9635 48.3476L0 45.5131L29.9635 42.6785L32 0.972351Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="see-more-arrow-container">
            <div className="seemore-text">See more</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M7.66415 9.29595C7.6683 8.24949 7.66814 7.20275 7.66799 6.15636C7.6679 5.51676 7.6678 4.87729 7.66869 4.23809L7.6692 3.87526L7.41263 4.13182L1.85487 9.68941L1.96094 9.79548L1.85487 9.68941C1.64005 9.90423 1.23453 9.90397 1.01651 9.68596L0.313922 8.98339C0.313911 8.98338 0.3139 8.98337 0.313889 8.98336C0.096074 8.76537 0.0957675 8.36005 0.310613 8.14504C0.310624 8.14502 0.310635 8.14501 0.310646 8.145L5.86837 2.58744L6.1244 2.33142L5.76232 2.33138C5.24959 2.33132 4.70196 2.33179 4.13402 2.33227C3.02993 2.33322 1.84907 2.33423 0.698618 2.33157C0.699919 1.9827 0.700896 1.6612 0.701871 1.34019C0.70303 0.95888 0.704186 0.57825 0.705882 0.15322C2.80036 0.159447 4.88104 0.156514 7.09597 0.153392C7.98874 0.152133 8.90331 0.150844 9.8494 0.150112C9.84225 1.9923 9.844 3.81936 9.84584 5.73654C9.84693 6.88257 9.84806 8.06081 9.84734 9.29372C9.56213 9.2945 9.25322 9.29442 8.93494 9.29435C8.51668 9.29424 8.08224 9.29414 7.66415 9.29595Z"
                fill="white"
                stroke="white"
                stroke-width="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="model-image-container">
        <img src={Model} alt="" />
      </div>
      <div className="jacket-name">Oregon Jacket</div>
      <div className="jacket-price">$124</div>
    </div>
  );
}

export default Banner;
