//import {useState, useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios'
const ProductDetail = (props)=>{

    const [id] = useParams()
    const [singleProduct, setProduct] = useState()
    const url = `https://fakestoreapi.com/products/${id}`
    useEffect(()=>{
        axios.fetch(url).then((res)=>{
            console.log(res,"response API");
            return setProduct(res.json())
        })

    },[]);
    console.log(singleProduct,"product");

return(
<>

<p className='animate-bounce bg-indigo-700'>Checking ProductDetail Component Working </p>

</>

)
}

export default React.memo(ProductDetail);