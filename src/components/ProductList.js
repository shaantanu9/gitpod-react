import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";
//See the Location ./components? Correctly
import React from "react";
//import ProductList from './components/ProductList'
const ProductList = (props) => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e.message));
    // console.log(data, "getting data");
  }, []);
  console.log(data);

  return (
    <div className='App'>
      <div className='grid grid-cols-3 gap-2'>
        {data.map((el) => (
          <Card obj={el} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductList);
