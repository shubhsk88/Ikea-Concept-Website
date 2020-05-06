import React from "react";
import "./styles.css"

export const Navbar = () => {
  return <div className="navbar-container">
    <a href="/" className="navbar__logo">IKEA</a>
    <nav className="navbar__nav">
      <ul className="navbar__list">
        <li className="navbar__item"><a className="navbar__item-link" href="/">New</a></li>
        <li className="navbar__item"><a className="navbar__item-link" href="/">Projects</a></li>
        <li className="navbar__item"><a className="navbar__item-link" href="/">Rooms</a></li>
        <li className="navbar__item"><a className="navbar__item-link" href="/">Inspiration</a></li>
      </ul>
    </nav>
    <div className="navbar__logo"></div>

  </div>
};
