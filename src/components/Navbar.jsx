import React, { useState } from "react";
import "../sass/Navbar.scss"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <span>V</span>ignesh <span>S</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home"><span>H</span>ome</a></li>
          <li><a href="#skills"><span>S</span>kills</a></li>
          <li><a href="#projects"><span>P</span>rojects</a></li>
          {/* <li><a href="#tools"><span>T</span>ools</a></li> */}
          <li><a href="#contact"><span>G</span>et In Touch</a></li>
        <button className="contact-btn">Contact</button>
        </ul>

        {/* Contact Button */}
      </nav>
    </header>
  );
};

export default Navbar;
