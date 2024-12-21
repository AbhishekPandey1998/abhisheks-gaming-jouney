import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games List</Link>
      <Link to="/pc-config">PC Configuration</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
