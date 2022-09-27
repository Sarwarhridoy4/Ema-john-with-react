import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/order'>Order</a>
          </li>
          <li>
            <a href='/contact'>Order-Review</a>
          </li>
          <li>
            <a href='/manage'>Manage Inventory</a>
          </li>
          <li>
            <a href='/login'>Log In</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
