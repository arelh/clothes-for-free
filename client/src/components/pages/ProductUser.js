import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner";
// import AllProduct from "./AllProduct";

function ProductUser() {
  let { id } = useParams();
  const [infoProductById, setInfoProductById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [id]);
  console.log(infoProductById);

  // const Navigate=useNavigate()
  // const {id}=useParams()

  // return (

  //   <div className="ProductUser">
  //       {isLoading && <Spinner />}
  //       {infoProductById.map((user)=>{

  //       })}
  //       <button className="btn_addProduct"> <Link to="/EnterNewProduct" className="link">הוסף פריט</Link> </button>
  //     <div className="containerProductUser">
  //       <div className="titleProductUser">
  //         <p>הבגדים של {id}</p>
  //       </div>
  //       <div className="cardProduct">

  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="ProductUser">



     <button className="btn_addProduct"> <Link to="/EnterNewProduct" className="link">הוסף פריט</Link> </button>



     <div className="containerProductUser">



    <div className="titleProductUser">
         <p>הבגדים של {id}</p>
         </div>
      {isLoading && <Spinner />}
      {infoProductById.map((user) => {
        return (
          <div className="cardProduct" key={user._id}>
            <p>סוג הבגד: {user.kind}</p>
            <p>מידה: {user.size}</p>
            <p>צבע: {user.color}</p>
            <p>עונה: {user.season}</p>
            <p>מין הלובש:{user.gender_wear}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default ProductUser;
