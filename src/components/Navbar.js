import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
       
      <ul>
        <NavLink exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink exact to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink exact to="/pricing">
          <li>Pricing</li>
        </NavLink>
      </ul>
    </div>
  );
}
