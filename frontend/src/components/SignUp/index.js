import axios from 'axios'
import React, { useState } from 'react'

const Index = () => {


    const [formData,setFormData]=useState({
        name:"",
        email:"",
        is_seller:'',
        password:"",
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

        
        if (e.target.name==="is_seller"){
            e.target.checked===true ? e.target.value='True':e.target.value='False'       
        }


        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        console.log(formData)
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'


        axios.post("http://127.0.0.1:8000/signup",formData,{
            headers:{"Content-Type":"application/json"}
        })
        .then(response=>{
            console.log("the data sent is : ",formData)
            console.log("The response recived is : ",response)
        })
        .catch(error=>{
            console.log("The Error is : ",error)
        })
    }

    const checkPassword=(e)=>{
        if (e.target.value!==formData.password){
            document.getElementById("passAlert").style.display="block"
        }else{
            document.getElementById("passAlert").style.display="none"
        }
    }




  return (
    
    <form className='form' onSubmit={handleSubmit}>
        <input type='hidden' name="csrfmiddlewaretoken" value={csrftoken}/>

        <input type='text' name='name' value={formData.name} onChange={handleInput}/>
        <input type='email' name='email' value={formData.email} onChange={handleInput}/>
        <input type='checkbox' name='is_seller' value={formData.is_seller} onChange={handleInput}/>
        <div className="alert alert-warning" id="passAlert" style={{display:'none'}} role="alert">
            Your password Doesn't match.!
        </div>
        <input type='password' name='password' value={formData.password} onChange={handleInput}/>
        <input type='password' name='cPassword' onChange={checkPassword}/>

        <input type='submit' value="Register"/>
    </form>



  )
}

export default Index