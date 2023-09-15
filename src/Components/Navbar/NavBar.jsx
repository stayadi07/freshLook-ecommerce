import React from "react";
import navbar from "../Navbar Data/navbarData";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      {navbar?.map((item) => {
        return (
          <li key={item.id} className="navbar-items">
            {item?.name.toUpperCase()}
            {item.child && (
              <div className="products-items">
                {item.child.map((childItem) => (
                  <li key={childItem.id}>{childItem.name.toUpperCase()}</li>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </div>
  );
}

export default NavBar;
