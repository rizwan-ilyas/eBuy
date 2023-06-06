import "./Product.scss"



const index = ({product}) => {
    return (
    
        <div className="product-card" key={product.id}>
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/bag.png" className="d-block w-100" alt="..." />
                        </div>
                        {/*
                    <div classNameName="carousel-item">
                        <img src="images/2.png" className="d-block w-100 h-20 img-fluid" alt="..."/>
                    </div>
                        */}
                    </div>
                    
                </div>


            </div>
            <div className="product-details">
                <span className="product-catagory">{product.name}</span>
                <h5><a href="">Women leather bag</a></h5>
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
    )
}

export default index