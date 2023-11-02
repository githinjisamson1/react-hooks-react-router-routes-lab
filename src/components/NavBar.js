import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // const navItems = ["Home", "Movies", "Directors", "Actors"];
  return (
    <div className="navbar">
      {/* <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem}>
              <NavLink to={`/${navItem}`}>{navItem}</NavLink>
            </li>
          );
        })}
      </ul> */}
      
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/directors">Directors</NavLink>
        </li>
        <li>
          <NavLink to="/actors">Actors</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
