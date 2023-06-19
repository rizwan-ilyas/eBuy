import React from 'react'

import "./cart.css"


const img1 = require('../../Assets/Img1.jpg');

const Cart = () => {


    return (
        <div class="cart_area section_padding_100 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="cart-table clearfix">
                            <table class="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
        <tr>
            <td className="cart_product_img d-flex align-items-center">
                <a href="#"><img src={img1} alt="Product"/></a>
                <h6>Product Name</h6>
            </td>
            <td className="price"><span>Rs.1000</span></td>
            <td className="qty">
                <div className="quantity">
                    <span className="qty-minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
                    <input type="number" className="qty-text" step="1" min="1" max="99" name="quantity" value="1"/>

                        <span className="qty-plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </td>
            <td className="total_price" ><span id="">1000</span></td>
        </tr>
        </tbody>
                            </table>
                        </div>
                        </div></div></div></div>



    )
}

export default Cart