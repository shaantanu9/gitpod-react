// eslint-disable-next-line
import RoutesLink from "./router/RoutesLink"; //importing the Routes component
import ProductList from './components/ProductList'
import Navbar from "./components/Navbar";
//See the Location ./components? Correctly
// import Home from "./components/Home";
function App() {
return (
  <>
  <Navbar/>
  <RoutesLink/>
  </>
)
}

export default App;
