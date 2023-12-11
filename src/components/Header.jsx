import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import '../assets/styles/navbar.css';
import '../assets/styles/navbar.scss';
import LOGO from '../assets/mainlogo-removebg-preview.png';

const Header = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  return (
    <div className="navbar">
      <a href='/'><img width="100px" height="auto" src={LOGO} alt="LOGO" /></a>
       
      <ul className='headerul'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/AddABook'>Add a Book</a>
        </li>
        <li>
          <a href='/BookList'>All Books</a>
        </li>
        {isLoggedIn ? (<li>
          <a href='/Profile'>Profile</a>
        </li>) : (<li>
          <a href='/Register'>Register</a>
        </li>)}


      </ul>
    </div>
  );
};

export default Header;