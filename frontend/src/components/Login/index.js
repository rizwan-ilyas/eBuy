import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';

import axios from "axios";
import "./login.css"

const Index = () => {

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




  useEffect(() => {

  })

  const getDataFrom = () => {
    axios.get('http://127.0.0.1:8000/signin')
      .then(response => {
        console.log("Response is ", response)
      })
      .catch(error => {
        console.log("Error is ", error)
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


  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);


  return (
 

    
<Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Login Modal"
       className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={() => setModalOpen(false)}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-title text-center">
              <h4>Login</h4>
            </div>
            <div className="d-flex flex-column text-center">
              <form onSubmit={submitHandle}>
              <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                <div className="form-group">
                  <input type="email"  className="form-control" id="email1" name="email" value={formData.email} onChange={handleInput} placeholder="Your email address..."/>
                </div>
                <div className="form-group">
                  <input type="password" value={formData.password} name="password" onChange={handleInput} className="form-control" id="password1" placeholder="Your password..."/>
                </div>
                <button type="submit" className="btn btn-info btn-block btn-round">Login</button>
              </form>
              
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <div className="signup-section">Not a member yet? <a href="/signup" className="text-info"> Sign Up</a>.</div>
          </div>
        </div>
      </Modal>
  


      )

}

      export default Index




