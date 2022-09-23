import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-warning'>
            <h1> This is Header component </h1>
          <nav className='navber'>
          <a href="/Home">Home</a>
            <a href="/Blog"> Blog</a>
            <a href="/About">About</a>
          </nav>
        </div>
    );
};

export default Header;