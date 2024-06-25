import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Main from './Main';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About';



function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Home/>}/>

  <Route path="/products" element={<Main/>}/>

  <Route path="/about" element={<About/>}/>




  </Routes>
  </BrowserRouter>

    
    </>
  );
}

export default App;
