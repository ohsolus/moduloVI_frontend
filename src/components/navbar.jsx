import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar(props) {
  const [active, setActive] = useState("nav__menu");
  const [togglerIcon, setTogglerIcon] = useState("nav__toggler");
  const navToggler = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //toggler Icon
    togglerIcon === "nav__toggler"
      ? setTogglerIcon("nav__toggler toggler")
      : setTogglerIcon("nav__toggler");
  };
  return (
    <div>
      <nav className="nav">
        <a href="/" className="nav__brand">
          Weelog
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="form" className="nav__link">
              Registro
            </a>
          </li>
          <li className="nav__item">
            <a href="docs" className="nav__link">
              Docs
            </a>
          </li>
          <li className="nav__item">
            <a href="content" className="nav__link">
              Participantes
            </a>
          </li>
          <li className="nav__item">
            <a href="support" className="nav__link">
              Soporte
            </a>
          </li>
        </ul>
        <div onClick={navToggler} className={togglerIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
