import React from "react";
import DesktopLinks from "./DesktopLinks";

const DesktopNav = ({ logo }) => {
  return (
    <nav>
      <div className="nav-bar desktop-navbar">
        <div className="desktop-logo-box">
          <img src={logo} alt="logo" className="logo icon" />
        </div>
        <ul className="desktop-navs">
          <DesktopLinks />
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
