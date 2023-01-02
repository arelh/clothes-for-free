import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Homepage from "./components/pages/Homepage";
import AllProduct from './components/pages/AllProduct';
import Login from './components/Login';
import Register from './components/Register';
import ProductUser from './components/pages/ProductUser';
import EnterNewProduct from "./components/EnterNewProduct"


function App() {
  return (
    <div>
       <Nav/>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/AllProduct" element={<AllProduct/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/ProductUser" element={<ProductUser/>} />
        <Route path="/ProductUser/:id" element={<ProductUser/>} />
        <Route path="/EnterNewProduct" element={<EnterNewProduct/>} />
        <Route path="*" element={<Error />} />
      </Routes>
     
    </div>
  );
}

export default App;
