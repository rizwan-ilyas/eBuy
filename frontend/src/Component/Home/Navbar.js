import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className='top-bar'>
        <nav className='navbar'>
          <div className='logo'>EBuy</div>
          <ul className='menu'>
            <Link to="/" ><li>Home</li></Link>
            <Link to="/about" >    <li>About</li></Link>
            <Link to="/service" >  <li>Services</li></Link>
            <Link to="/why-us" >   <li>Why Us</li></Link>
            <Link to="/contact" >  <li>Contact</li></Link>
          </ul>
        </nav>
      </div>
    );
  }
  
export default Navbar