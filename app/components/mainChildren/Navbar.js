import React from "react";

const Navbar = () => (
  <nav>
    <div>
      <a href="/">Ramazon</a>
      <ul>
        <li>
          <a href="/signin">Sign In</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
