import React from "react";
import './productdetail.css';
function Detailproduct({product})
{
    return (
        <>
        
            <div className="card" key={product.id}>
                <div className="container">
                    <div className="wrapper row">
                        <div className="col-md-4">
                            
                            <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACBCAMAAAA1zC5LAAAAaVBMVEUAAAD////7+/vk5OT4+Pjz8/Pr6+vOzs7w8PDZ2dmlpaV2dna0tLTIyMioqKhnZ2efn59FRUVQUFBgYGCVlZUlJSWDg4MdHR08PDxaWlq6urqLi4uurq5VVVXAwMArKysQEBAzMzMXFxfBvJzdAAADXElEQVRoge1X2XKjMBCUEAIJjDlt8A3+/4/cORB2kqpds7WJq7amHxxxiJ5p9YwUpQQCgUAgEAgEAoFAIBAIBAKBQCAQCP5fDPXQv4k695HWZju+gzvTDHf7SdZph7+tDjj+IPfZOqTbAG1XN0brhGK5Gn9uPr/bJmZGjVFn3hT7kR/lqfHZsJK7A1IDf73WqSIB7G5Zg/2nl0+LPEDTWBql5NErjaN2FfcQwxwPA0j5itdEngeOT7lvw/1Yqd48LVMV7u/WkBd6Jk9h5kgpg+wJZn2CuAo1FKkHAaZN4Vt1RKpbfWlHVuHagmBRo3qoE1diBNsV3AegZPI9Kqhq+EqmahifFVK5aYwpHAjKjRhhFaYCrb3TqydS6kS3/AryVEfVPCNFCdBvEwWSczwXWv4Stejo64sNHJskRjEydgGY1r3uOYi7KGfyu+dVO7DdYLVLor2jDKBQxMtchqnAulHkFU+BK1r56PIyOax40wWt9kSOHwe99URrggJAPnFFeg+OXkmykSPDBfZYLIZiIxscViSeqiB7x361DdcN9LmGi60BH0Ta3jhbguk/kidMjuG/XGwbzGzL5A0abw8/ZkclsFvIuSLAgOrioL0kfJU/k9sH+auZg4rg4COTb6irYz5VIJ9l586LFd9jFd9RIvuR3K2XfU+WubJrHRULxpAE2cvZAmSG7jEPnXkLsjuMfZY9W2E4SPDYdVhdWYUlg/0aErL9mQ0XVCSh3WMePq4PEZNTJ5oNBw9s/SJ52ESpu8dY00Qe3yqWGdwQ13yLm8gT+TBwqfXLOnE25tXTyGMXhbZuORHsarSee2o7+C3sLJp3nwf5DfXwFBn4AqOtqQ2kL3JD6ikAFs2mDfWJqt1Sk52IK6eg0PMxLXNoL3gRcw2U1GRrcseVirX7Hd9XzIYrFxUOc3FpSgfHxdz5GQ2PF91wVws7XLzyDFjMTSbsihj7kPC4oj0WlmC0Ouyvk5nL/zzbBY9dbcQX+TputUkMa1X6xDrP4g5XGBukqBJzhHQyOMPkF3MqK4zLjPjSKXE2OfKRr0kfk/8O9+Hp8Dh8PUguZ4xAMj3tYff6e4/dvPWsPSz9I4xdakxR/fnFb0L/rn9pBAKBQCAQCAQCgUAgEAgEAoFAIBAI3oBfSZMkfNQw258AAAAASUVORK5CYII=" /></div>
                            </div>
                            
                        </div>
                        <div className="details col-md-4">
                            <h3 className="product-title">{product.name}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <h5 className="sizes">Description</h5>
                            <p className="product-description">{product.description}</p>
                            <h4 className="price">current price: <span>{product.price}</span></h4>
                            
                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
        </>
    );


}
export default Detailproduct;