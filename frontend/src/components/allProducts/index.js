import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from "../Product"




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
   

  return (

    <>
        {
            itemData.map((item)=>(
                <Product key={item.id} product={item}/>    
            ))
        }

                
    </>
  )
}

export default Index