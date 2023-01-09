import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Spinner from "../Spinner";
import EnterNewProduct from "../EnterNewProduct";

// import AllProduct from "./AllProduct";

function ProductUser() {
  let { id } = useParams();
  const [infoProductById, setInfoProductById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [data1, setData1] = useState(null);

  //!edit
  // const editProduct = async (id) => {
  //   try {
  //     const  {data}  = await axios.patch(
  //       `http://localhost:5002/clothesForFree/products/update/${id}`
  //     );
  //     console.log(data);
  //     setData1(data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  //!delete
  // console.log(id);
  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5002/clothesForFree/products/delete/${id}`
      );
      console.log(data);
      setInfoProductById((prevState) =>
        prevState.filter((product) => {
          window.location.reload(true);
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
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [id]);

  return (
    <div className="ProductUser">
        <div className="titleAndButton">
          <button
            className="btn_addProduct"
            onClick={() => {
              setPopup(true);
            }}
            >
            {" "}
            הוסף פריט{" "}
          </button>
            {user && <p className="title">הבגדים של {user.name}</p>}
          </div>
      <div className="containerProductUser">
        <div className="titleProductUser">
        </div>
        {popup ? <EnterNewProduct id={id} setPopup={setPopup} /> : ""}
        {isLoading && <Spinner />}
        {infoProductById.map((user) => {
          // console.log(id);
          return (
            <div className="cardProduct_user" key={user._id}>
              <p>סוג הבגד: {user.kind}</p>
              <p>מידה: {user.size}</p>
              <p>צבע: {user.color}</p>
              <p>עונה: {user.season}</p>
              <p>מין הלובש:{user.gender_wear}</p>
              <img className="imgProduct" src={user.image} alt={"img"}></img>
              <Link to={`/ProductUser/edit/${user._id}`}>
                        <button type="button" className="btn_edited" >
                          ערוך
                        </button>
                      </Link>

              <button
                type="button"
                className="btn_deleted"
                onClick={() => {
                  deleteProduct(user._id);
                }}
              >
                מחק פריט
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductUser;
