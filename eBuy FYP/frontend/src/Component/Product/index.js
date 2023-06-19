import "./product.scss"
import "./product.css"

const img1 = require('../../Assets/Img1.jpg');
const index = ({ product }) => {





  function modalClicked() {

    document.getElementById('descimg').src = img1
    document.getElementById('p_name').innerHTML = product.name
    document.getElementById('p_desc').innerHTML = product.description
    document.getElementById('p_price').innerHTML = product.price
    document.getElementsByName('addtocart')[0].id = product.id

  }



  return (
    <>
      <div className="product-card" key={product.id}>
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>

            </div>

          </div>


        </div>
        <div className="product-details">
          <span className="product-catagory">{product.name}</span>
          <h5><a href="#" data-toggle="modal" onclick={modalClicked} data-target="#quickview">Women leather bag</a></h5>
          <p>{product.description}</p>
          <div className="product-bottom-details">
            <div className="product-price"><small>${product.price}</small>$230.99</div>
            <div className="product-links">
              <a href=""><i className="fa fa-heart"></i></a>
              <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>




      <div className="modal-body">
        <div className="quickview_body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="quickview_pro_img">
                  <img src="" id="descimg" alt="Product-Image" />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="quickview_pro_des">
                  <h4 className="title" id="p_name"></h4>
                  <div className="top_seller_product_rating mb-15">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>

                  <h5 className="price" id="p_price"></h5>
                  <p id="p_desc"></p>

                </div>

                <div className="quantity">
                  <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>

                  <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />

                  <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
                <button name="addtocart" className="cart-submit" onclick="addtocart(this)">Add to cart</button>



                <div className="share_wf mt-30">
                  <p>Share With Friend</p>
                  <div className="_icon">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>

      )
}

      export default index