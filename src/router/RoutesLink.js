// eslint-disable-next-line
import { Route, Routes, BrowserRouter, Switch, Navigate } from 'react-router-dom';
import React from 'react';
// import LoginUser from '../components/LoginUser' //importing the LoginUser component

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
    {/* <Route exact path='/admin' element={isAdmin?<Admin/>:<Navigate to='/login' replace />}/> */}
    {/* <Route exact path='/getuser/:id' element={<GetSpecificUserDetail/>} /> */}
    {/* <Route path='/*' element={<LoginUser/>} /> */}

</Routes>
</>

)
}

export default RoutesLink;