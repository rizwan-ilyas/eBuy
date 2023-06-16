import React from 'react'
import {Link}  from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faRightToBracket, faStore } from '@fortawesome/free-solid-svg-icons'
import './TopHeader.css'

function TopHeader() {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className='top-header'>
        <ul>
          <li className='liIcon'><FontAwesomeIcon icon={faEnvelope} /> <span>info@ebuy.com</span></li>
          <li className='liIcon'><FontAwesomeIcon icon={faPhone} /> <span>+923117789831</span> </li>
          <div className='btnTopHeader'>
            <Link to="/signin"><button className='loginHeader'> <FontAwesomeIcon icon={faRightToBracket} /> Login </button> </Link>
            <button className='sellerHeader'> <FontAwesomeIcon icon={faStore} /> Become a Seller</button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default TopHeader