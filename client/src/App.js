import "./App.css";
import  "../src/normalize.css"
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Homepage from "./components/pages/Homepage";
import AllProduct from "./components/pages/AllProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductUser from "./components/pages/ProductUser";
import EnterNewProduct from "./components/EnterNewProduct";
import { useEffect, useState } from "react";
import About from "./components/pages/About";
import Edit from "./components/Edit";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // const user = localStorage.getItem("user");
    const user2 = localStorage.getItem("userLog");
    console.log(user2);
    if (user2) {
      setLoggedUser(user2);
    }
  }, []);
  return (
    <div>
      <Nav loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        {!loggedUser && <Route path="/Login" element={<Login  />} />}
        <Route path="/Register" element={<Register />} />
        <Route path="/ProductUser" element={<ProductUser />} />
        <Route path="/ProductUser/:id" element={<ProductUser />} />
        <Route path="/ProductUser/edit/:id" element={<Edit />} />
        <Route path="/EnterNewProduct" element={<EnterNewProduct />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
