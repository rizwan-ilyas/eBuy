import React, { useEffect, useState } from 'react'




const Index = () => {

    const [itemData,setitemData]=useState(null)


    useEffect(()=>{
        getDataFrom()
    })

    const getDataFrom=()=>{
       setitemData=axios.get('http://127.0.0.1:8000/getproducts').then(response=>{
            console.log("the response get data is : ",response.data)
        })

        .catch(error=>{
            console.log(error)
        })
    }

    const loadProducts=()=>{
    
    }


  return (
    <>
        {
            itemData.map((item,key)=>{
                <Product product={item}/>
            })
        }

    </>
  )
}

export default Index