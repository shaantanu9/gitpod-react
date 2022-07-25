//import {useState, useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import React from "react";
const Card = ({ obj }) => {
  // console.log(Object.keys(obj))
  const { id, title, price, description, category, image, rating } = obj;
// console.log(rating);
  return (
    <>
    <Link to={`/productDetail/${id}`}>
      <div key={id} className='flex justify-between'>
        <div>
        <div className="flex justify-center max-w-full">
          
        <img src={image} alt={title} height='100px' width='250px' className='hover:scale-110 rounded-xl' />
        </div>
        <div className='w-[90%]'>
          <p className='text-xl'>{title}</p>
          <div className='flex justify-between text-sm'>
             <div>{category}</div>
             <div>{rating.rate}</div>
          </div> 
          <p>{price}</p>
          {/* <p>{description}</p> */}
        </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default React.memo(Card);
