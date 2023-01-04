import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import Spinner from "../Spinner";
import EnterNewProduct from "../EnterNewProduct";
// import AllProduct from "./AllProduct";

function ProductUser() {
  let { id } = useParams();
  const [infoProductById, setInfoProductById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [user,setUser]=useState(null)



//!edit
  const editProduct=()=>{
    console.log();
  }
//!delete
const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5002/clothesForFree/products/delete/${id}`
    );
    setInfoProductById((prevState) =>
      prevState.filter((product) => {
        return product.id !== data.id;
      })
    );
  } catch (e) {
    console.log(e.message);
    
  }
};




  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:5002/clothesForFree/products/user/${id}`
        );
        setInfoProductById(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchDataProduct();
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [id]);
  
  return (
    <div className="ProductUser">

      <div className="containerProductUser">
        <div className="titleProductUser">
      <button className="btn_addProduct" onClick={ ()=> {
        setPopup(true)}}>
        {" "}
        הוסף פריט{" "}
      </button>
          {user&&<p className="title" >הבגדים של {user.name}</p>}
        </div>
        {isLoading && <Spinner />}
        {infoProductById.map((user) => {
          console.log(id);
          return (
            <div className="cardProduct_user" key={user._id}>
              <p>סוג הבגד: {user.kind}</p>
              <p>מידה: {user.size}</p>
              <p>צבע: {user.color}</p>
              <p>עונה: {user.season}</p>
              <p>מין הלובש:{user.gender_wear}</p>
              <button type="button" className="btn_edit" onClick={editProduct}>edit</button>
              <button type="button" className="btn_edit" onClick={deleteProduct}>remove</button>
              
            </div>
          );
        })}
      </div>
      {popup ? <EnterNewProduct id={id} />  : ""}
    </div>
  );
}

export default ProductUser;
