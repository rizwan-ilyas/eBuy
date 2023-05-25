import React, {useState, useEffect} from 'react'
import axios from "axios";

const Index = () => {

    const [formData,setFormData]=useState({
        email:"",
        password:""
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


    const csrftoken=getCookie('csrftoken')

    const handleInput=(e)=>{
        setFormData({...formData,
            [e.target.name]: e.target.value})
    }




    useEffect(()=>{
      
    })

    const getDataFrom=()=>{
      axios.get('http://127.0.0.1:8000/signin')
      .then(response=>{
        console.log("Response is ",response)
      })
      .catch(error=>{
        console.log("Error is ",error)
      })
  }




    const submitHandle=(e)=>{

        e.preventDefault()

        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'

        axios.post('http://127.0.0.1:8000/signin',formData,{
            headers:{'Content-Type':'application/json'}
        })
            .then(response=>{
                console.log("The data which is sent : ",formData)
                console.log("The Data which is recieved : ",response)
                //getDataFrom()
            })
            .catch(error=>{
                console.log("Error is : ",error)
            })
    }




  return (
      <form onSubmit={submitHandle}>

          <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
          <input type="email" name="email" value={formData.email} onChange={handleInput}/>
          <input type="password" value={formData.password} name="password" onChange={handleInput}/>
            <input type="submit" value="Submit"/>
      </form>
  )
}

export default Index




