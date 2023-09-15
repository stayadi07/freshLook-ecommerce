import React from "react";
import "./main.css";
import TopHeader from "./Header/Top-Header/TopHeader";
import MainHeader from "./Header/Main Header/MainHeader";
import NavBar from "./Navbar/NavBar";
import Banner from "./Banner/Banner";

function Main() {
  return (
    <div className="main-container">
      <TopHeader />
      <MainHeader />
      <NavBar />
      <Banner />
    </div>
  );
}

export default Main;
