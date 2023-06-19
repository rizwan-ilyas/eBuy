import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FcNext } from 'react-icons/fc'
import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import Product from '../Product';
import './category.css'
import '../Product/product.css'




const Index = () => {

  const [itemData,setitemData]=useState([])


  const getData=()=>{
    
          axios.get('http://127.0.0.1:8000/getproducts')
          .then(response=>{
              setitemData(response.data)    
              console.log("the response get data is : ",response.data)
          })
      
          .catch(error=>{
              console.log(error)
          })
  }

  useEffect(()=>{
    getData();
},[])


  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10,
    arrows: true,
  };


  const [IsHovering, setIsHovering] = useState(false);
  const useSliderRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    useSliderRef.current.slickPause(); // pause autoplay
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    useSliderRef.current.slickPlay(); // resume autoplay
  };


  return (

    <>
      <div className='header'>
        <div className='category'>
          <h1 className='headerTitle'>Category</h1>
        </div>
        <div className='viewAll'>
          <button className='btnAll'>View All</button>
        </div>
      </div>
      <hr/>
      <div className='row karl-new-arrivals'>
      <Slider {...settings} ref={useSliderRef}>
      {
            itemData.map((item)=>(
                <Product key={item.id} product={item}/>    
            ))
        }

      </Slider>
      </div>
    </>
  );
};

export default Index