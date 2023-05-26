import axios from 'axios'
import React, { useState } from 'react'

const Index = () => {

    const [formData, setFormData] = useState({
        'phone': '',
        'address': '',
        'imagefile': null,

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


    const handleInput = (e) => {
        if (e.target.name === 'imagefile') {
            setFormData(
                { ...formData, [e.target.name]: e.target.files[0] })
        }
        else {

            setFormData(
                { ...formData, [e.target.name]: e.target.value })
        }
    }


    const uploadCliked=()=>{
        
        if(formData.imagefile!=null){
            console.log(formData.imagefile.name)
        document.getElementById('profile').img=formData.imagefile;}else{
            console.log("Image not found")
        }
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        

        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.post('http://127.0.0.1:8000/addcustomer',formData,{
            headers:{'Content-Type':'multipart/form-data'}
        })
        .then(response=>{
            console.log('The data which is sent is : ',formData)
            console.log("The response is : ",response)
        }).catch(error=>{
            console.log("The error is : ",error)
        })

    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
                <input type='tel' name='phone' value={formData.phone} onChange={handleInput} />
                <textarea name='address' value={formData.address} onChange={handleInput} />

                <input type='file' name='imagefile' accept='image/png, image/peng, image/jpg' onChange={handleInput} />
                <button  onClick={uploadCliked}>Upload</button>
                <img src='...' style={{height:'20px',width:'20px'}} id='profile' alt='profile picture' />
                <input type='submit' value="Enter Fields" />

            </form>



        </div>
    )
}

export default Index