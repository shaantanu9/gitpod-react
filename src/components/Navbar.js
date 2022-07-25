//import {useState, useEffect,useRef} from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from './components/Navbar' //
const Navbar = (props)=>{

    
return(
<>

<div className="flex justify-between">

<div className="flex justify-between space-x-3">
    <Link to="/">Home</Link>
    <Link to="productlist">Product</Link>
    <Link to="checkout">Checkout</Link>
</div>
<div className="flex justify-between space-x-3">
    <Link to="login">Login</Link>
    <Link to="signup">Singup</Link>
    <Link to="cart">Cart</Link>
</div>

</div>

</>

)
}

export default React.memo(Navbar);