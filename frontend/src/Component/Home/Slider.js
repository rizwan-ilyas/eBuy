import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {CImage, CCarouselCaption, CCarousel, CCarouselItem } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS


const img1 = require('../../Assets/Img1.jpg');
const img2 = require('../../Assets/Img2.jpg');
const img3 = require('../../Assets/Img3.jpg');
const img4 = require('../../Assets/Img4.jpg');
const img5 = require('../../Assets/Img5.jpg');
const img6 = require('../../Assets/Img6.jpg');


function Slider() {
    return (
        <div>
            <div className='container-fluid' style={{padding : '0px'}} >
                <Carousel>
                    <Carousel.Item style={{}} >
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img1} />
                        <Carousel.Caption>
                            <h3>Smart Phones</h3>
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item>
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img2} />
                        <Carousel.Caption>
                            <h3>Computer Accessories</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img3} />
                        <Carousel.Caption>
                            <h3>Vehicles</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img4} />
                        <Carousel.Caption>
                            <h3>Sports</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img5} />
                        <Carousel.Caption>
                            <h3>Electronic</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height : '30rem'}}
                            className="d-block w-100"
                            src={img6} />
                        <Carousel.Caption>
                            <h3>Fashion</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Slider