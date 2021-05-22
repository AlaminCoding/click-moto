import React, { useState } from "react";
import logo from "../../img/logo.png";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import Nav from "./nav";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("menu");

  // Menu Open and Menu Close Function
  const openMenu = () => {
    setMenuOpen(true);
    setMenuClass("menu menu-open");
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setMenuClass("menu");
  };
  return (
    <div className="navigation-bar">
      <img src={logo} alt="Company_Logo" className="logo" />
      <Nav menuclass={menuClass} />

      {/* Changing Menu Toggle Button */}
      {menuOpen ? (
        <AiOutlineCloseCircle
          className="toggle-btn"
          onClick={() => closeMenu()}
        />
      ) : (
        <AiOutlineMenu className="toggle-btn" onClick={() => openMenu()} />
      )}
    </div>
  );
};

export default Navbar;
