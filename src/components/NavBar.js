import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const active_link = {
  background: "darkblue",
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={active_link}
      >
        Home
      </NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={active_link}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={active_link}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={active_link}>
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
