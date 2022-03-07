import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Aboutt from './Pages/Aboutt'
import Male from "./Pages/Male";
import 'bootstrap/dist/css/bootstrap.min.css'
import Wooman from "./Pages/Wooman";
function App() {

  return (
    <BrowserRouter>
      <Header />
    

      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/aboutt'element={<Aboutt/>}/>
        <Route path='/male' element={<Male/>}/>
        <Route path='/wooman' element={<Wooman/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
