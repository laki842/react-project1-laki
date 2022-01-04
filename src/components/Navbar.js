import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <ul className='nav-container'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/InnerProject1'>Launch</Link>
        </li>
        <li>
          <Link to='/InnerProject2'>Info</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
