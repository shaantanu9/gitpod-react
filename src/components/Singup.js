//import {useState, useEffect,useRef} from 'react'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
//import Signup from './components/Signup'
const Signup = (props) => {
  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      // Formik.values
      console.log(Formik.values);
    },
    validationSchema:Yup.object({
        
    })
  });

  return (
    <>
      <form onSubmit={Formik.handleSubmit} className='flex flex-col justify-between space-y-3 m-2'>

        <div>
            <label htmlFor="firstName">First Name: </label>
          <input
            className=' rounded-lg border border-black text-black pl-2 '
            onChange={Formik.handleChange}
            value={Formik.values.firstName}
            type='text'
            name='firstName'
            id='firstName'
            placeholder="Enter First Name"
          />
        </div>
        <div>
        <label htmlFor="lastName">Last Name: </label>

          <input
            className=' rounded-lg border border-black text-black pl-2 '
            onChange={Formik.handleChange}
            value={Formik.values.lastName}
            type='text'
            name='lastName'
            id='lastName'
            placeholder="Enter Last Name"
          />
        </div>
          <div>
          <label htmlFor="email">Email: </label>

          <input
            className=' rounded-lg border border-black text-black pl-2 '
            onChange={Formik.handleChange}
            value={Formik.values.email}
            type='email'
            name='email'
            id='email'
            placeholder="Enter Email"
          />
        </div>
        <div>
        <label htmlFor="password">Password: </label>

          <input
            className=' rounded-lg border border-black text-black pl-2 '
            onChange={Formik.handleChange}
            value={Formik.values.password}
            type='password'
            name='password'
            id='password'
            placeholder="Enter Password"

          />
        </div>
        <div>
           <button className=' bg-blue-600 text-white rounded-lg border border-black px-2 hover:scale-105' type='submit'>Submit</button>
        </div>        
      </form>
    </>
  );
};

export default React.memo(Signup);
