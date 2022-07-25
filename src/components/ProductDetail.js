//import {useState, useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios'
const ProductDetail = (props)=>{

    const {id} = useParams()
    const [singleProduct, setProduct] = useState({})
    const url = `https://fakestoreapi.com/products/${id}`
    useEffect(()=>{
        axios.get(url).then((res)=>{
            return setProduct(res.data)
        }).then(

        )

    },[]);

    const {title, price, description, category, image, rating} = singleProduct;
    console.log(title);
return(
<>

<div className="flex justfy-between">
    <div>
        <img src={image} alt={title} className="max-h-[400px] max-w-2xl"/>
    </div>
        <div>
            <h1 className="text-4xl " >{title}</h1>
            <div className='flex justify-between text-sm'>
            <p>{price}</p>
            <p>{category}</p>
            <p>{rating}</p>
            </div>
            <p>
                {description}
            </p>
    
        </div>
</div>

</>

)
}

export default React.memo(ProductDetail);