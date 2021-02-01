import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark fixed-top flex justify-content-around">
      <NavLink exact  to="/home" activeClassName="selectedHeaderLink">
        ReactNews
      </NavLink>
      <NavLink exact  to="/news" activeClassName="selectedHeaderLink">
        Today's News
      </NavLink>
      <NavLink exact  to="/research" activeClassName="selectedHeaderLink">
        Research
      </NavLink>
    </nav>
  );
};

export default Header;
