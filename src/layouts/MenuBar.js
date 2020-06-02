import React from "react";
import { NavLink } from "react-router-dom";
class Menubar extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="#" alt="LOGO" />
          </NavLink>
        </div>
        <div className="header__menus">
          <ul>
            <li>
              <NavLink to="/about">ACSC01</NavLink>
            </li>
            <li>
              <NavLink to="/info">ACSC02</NavLink>
            </li>
            <li>
              <NavLink to="/notice">ACSC03</NavLink>
            </li>
            <li>
              <NavLink to="/contact">ACSC04</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menubar;
