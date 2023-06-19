
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faRightToBracket, faStore } from '@fortawesome/free-solid-svg-icons'
import './TopHeader.css'
import React, { useState, useEffect } from 'react'

import Popup from "reactjs-popup";
import axios from "axios";
import "../User/login.css"

function TopHeader() {



  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function getCookie(name) {
    // Split document.cookie by semicolons into an array.
    const cookieArray = document.cookie.split(';');

    // Loop through the array elements.
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();

      // If this cookie contains the name we're looking for, return its value.
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(`${name}=`.length, cookie.length);
      }
    }

    // If we don't find the cookie, return null.
    return null;
  }


  const csrftoken = getCookie('csrftoken')

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }





  const submitHandle = (e) => {

    e.preventDefault()

    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.xsrfCookieName = 'csrftoken'

    axios.post('http://127.0.0.1:8000/signin', formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log("The data which is sent : ", formData)
        console.log("The Data which is recieved : ", response)
        //getDataFrom()
      })
      .catch(error => {
        console.log("Error is : ", error)
      })
  }




  return (
    <>
      <div className='top-header'>
        <ul>
          <li className='liIcon'><FontAwesomeIcon icon={faEnvelope} /> <span>info@ebuy.com</span></li>
          <li className='liIcon'><FontAwesomeIcon icon={faPhone} /> <span>+923117789831</span> </li>
          <div className='btnTopHeader'>

            <Popup
              trigger={<button className='loginHeader'>  <FontAwesomeIcon icon={faRightToBracket} /> Login </button>}
              modal
              nested
            >
              {close => (
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" onClick={() => close()}>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-title text-center">
                        <h4>Login</h4>
                      </div>
                      <div className="d-flex flex-column text-center">
                        <form className='form' onSubmit={submitHandle}>
                          <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your email address..."
                              name="email" value={formData.email} onChange={handleInput}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Your password..."
                              value={formData.password} name="password" onChange={handleInput}
                            />
                          </div>
                          <input
                            type="submit"
                            className="btn btn-info btn-block btn-round"
                          
                            value="Login"/>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                      <div className="signup-section">
                        Not a member yet?
                        <a href="/signup" className="text-info">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>)}
            </Popup>



            <button className='sellerHeader'> <FontAwesomeIcon icon={faStore} /> Become a Seller</button>
          </div>
        </ul>
      </div>
    </>
  )
}

export default TopHeader