import RoutesLink from './router/RoutesLink' //importing the Routes component
function App() {
  return (
    <div className='App'>
    <h1 className='text-3xl font-bold underline animate-bounce hover:bg-red-500'>
      Hello world!
    </h1>
    <RoutesLink/>
    </div>
  );
}

export default App;