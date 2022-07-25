// eslint-disable-next-line
import { Route, Routes, BrowserRouter, Switch, Navigate } from 'react-router-dom';
import React from 'react';
// import LoginUser from '../components/LoginUser' //importing the LoginUser component
import ProductDetail from '../components/ProductDetail' 
import Home from '../components/Home' 
import ProductList from '../components/ProductList';
import Singup from '../components/Singup';

//import {useState, useEffect,useRef} from 'react'
//import Routes from './components/Routes' //importing the Routes component
const RoutesLink = (props)=>{

    // get token from localstorage
   
    // if token present return true
    // if admin present return true
    // console.log(isAdmin, 'isAuthenticated');


return(
<>
<Routes>    
    {/* <Route exact path='/dashboard' element={ isLogged? <UserDashboard/>:<Navigate to='/login' replace /> } /> */}
    <Route exact path='/productdetail/:id' element={ <ProductDetail/> } />
    <Route exact path='/' element={ <ProductList/> } />
    {/* <Route exact path='/admin' element={isAdmin?<Admin/>:<Navigate to='/login' replace />}/> */}
    {/* <Route exact path='/getuser/:id' element={<GetSpecificUserDetail/>} /> */}
    {/* <Route path='/login' element={</>} /> */}
    <Route path='/productlist' element={<ProductList/>} />
    // <Route path='/signup' element={<Singup/>} />
    {/* // <Route path='/' element={</>} /> */}

</Routes>
</>

)
}

export default RoutesLink;