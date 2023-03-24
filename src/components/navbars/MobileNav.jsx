import React, { useState } from "react";
import menu from "../../assets/menu.svg";
import Navlinks from "./Navlinks";
const MobileNav = ({ logo }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="nav-bar">
      <div className="mobile-navbar">
        <img src={logo} alt="logo" className="icon logo" />
        <img src={menu} alt="menu" className="icon" onClick={toggleNav} />
      </div>

      <ul
        style={{ display: showNav ? "flex" : "none" }}
        className={`mobile-navs`}
      >
        <Navlinks />
      </ul>
    </nav>
  );
};

export default MobileNav;
