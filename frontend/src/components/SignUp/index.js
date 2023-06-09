import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Modal from 'react-modal';
import "../Login/login.css"


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


    const validateData=()=>{
        if(formData.is_seller===""){ formData.is_seller='False'}
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        validateData()
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

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      setModalOpen(true);
    }, []);


  return (
    
    <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="SignUp Modal"
       className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={() => setModalOpen(false)}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-title text-center">
              <h4>SignUp</h4>
            </div>
            <div className="alert alert-warning" id="passAlert" style={{display:'none'}}     role="alert">
                 Your password Doesn't match.!
             </div>
            <div className="d-flex flex-column text-center">
              
              <form onSubmit={handleSubmit}>
              <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                <div className="form-group">
                  <input type="name"  className="form-control" id="name1" name="name" value={formData.name} onChange={handleInput} placeholder="Your name..."/>
                </div>
                <div>
                    <div className="form-group">
                    <input type="email"  className="form-control" id="email" name="email" value={formData.email} onChange={handleInput} placeholder="Your email address..."/>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                    <input type="checkbox"  className="form-control"name="is_seller" value={formData.is_seller} onChange={handleInput} id="isSeller" />
                    </div>
                </div>

                
                <div>
                    <div className="form-group">
                    <input type="password"  className="form-control"name="password" value={formData.passsword} onChange={handleInput} id="password" placeholder="Enter Password..."/>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                    <input type="password"  className="form-control"name="cpassword"  onChange={checkPassword} id="cpassword" placeholder="Enter Confirm Password..."/>
                    </div>
                </div>
                <button type='submit' className='btn btn-info btn-block btn-round'>Register</button>
              </form>
              
            </div>
          </div>
        </div>
      </Modal>



  )
}

export default Index