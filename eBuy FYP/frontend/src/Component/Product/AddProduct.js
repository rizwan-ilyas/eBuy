import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {


    const [formData, setFormData] = useState({
        'name': '',
        'description': '',
        'price': '',
        'category': '',
        'imagefile': null,
        'quantity': '',
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
        if (e.target.name === 'imagefile') {
            setFormData(
                { ...formData, [e.target.name]: e.target.files[0] })
        }
        else {

            setFormData(
                { ...formData, [e.target.name]: e.target.value })
        }
    }


    const uploadCliked = () => {

        if (formData.imagefile != null) {
            console.log(formData.imagefile.name)
            document.getElementById('profile').img = formData.imagefile;
        } else {
            console.log("Image not found")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()


        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'

        axios.post("http://127.0.0.1:8000/addproduct", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(response => {
                console.log('The data which is sent is : ', formData)
                console.log("The response is : ", response)
            }).catch(error => {
                console.log("The error is : ", error)
            })
    }



    return (


        <div className="container tm-mt-big tm-mb-big my-3">
            <div className="row">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <form onSubmit={handleSubmit}>
                            <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} /><br />
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                </div>
                            </div>
                            <h4 style={{color:'red'}}> &nbsp;&nbsp;<a href="/">Goto Home</a></h4><br /><br />


                            <div className="row tm-edit-product-row">


                                <div className="col-xl-6 col-lg-6 col-md-12">

                                    <div className="form-group mb-3">
                                        <label for="name">Product Name
                                        </label>
                                        <input type="text" className="form-control validate" name='name' value={formData.name} onChange={handleInput} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="price">Product Price
                                        </label>
                                        <input type="text" name='price' value={formData.price} onChange={handleInput} className="form-control validate" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="price">Product Quantity
                                        </label>
                                        <input type="number" name="quantity" value={formData.quantity} onChange={handleInput}  className="form-control validate" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="description">Description</label>
                                        <textarea name='description' value={formData.description} onChange={handleInput} placeholder="enter details" className="form-control validate"
                                            required></textarea>

                                    </div>



                                    <div className="form-group mb-3 my-3">
                                        <label for="category">Category</label>
                                        <select name="catagory" className="form-control validate" required>
                                            <option value="mobiles">MOBILES</option>
                                            <option value="electronics">ELECTRONICS</option>
                                            <option value="accessories">ACCESSORIES</option>
                                            <option value="woman">WOMAN</option>
                                            <option value="man">MAN</option>
                                            <option value="shoes">SHOES</option>
                                            <option value="kids">KIDS</option>
                                        </select>

                                    </div>


                                </div>
                                

                                <div className="form-group mb-3">
                                <div className="custom-file mt-3 mb-3">
                                        <input type="file" name='imagefile' accept='image/png, image/peng, image/jpg' onChange={handleInput}  />
                                    </div>     
                                </div>


                                <div className="col-12">
                                    <input type="submit" name="sub" value="Add Product Now"
                                        className="btn btn-primary btn-block text-uppercase"/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




















    )
}

export default AddProduct



