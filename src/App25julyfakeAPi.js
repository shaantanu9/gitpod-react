import Navbar from "./components/Navbar";
import RoutesLink from "./router/RoutesLink"; //importing the Routes component
import { useState, useEffect } from "react";
import Card from './components/Card' 

import axios from "axios";
function App() {
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
    <Navbar/>
      <RoutesLink />
      <div className="grid grid-cols-3 gap-2" >
        
      {data.map((el)=>(
        <Card obj={el} />
        ))}
        </div>
    </div>
  );
}

export default App;