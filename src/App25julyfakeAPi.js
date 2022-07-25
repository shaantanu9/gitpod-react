// eslint-disable-next-line
import RoutesLink from "./router/RoutesLink"; //importing the Routes component
import Navbar from "./components/Navbar";
//See the Location ./components? Correctly
// import Home from "./components/Home";
function App() {
return (
  <>
  <div className="mx-auto">
  <Navbar/>
  <RoutesLink/>
  </div>
    
  </>
)
}

export default App;
