import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import shirt from "../images/shirt.jpg"
import pants from "../images/pants.png"
import undershirt from "../images/undershirt.jpg"
import dress from "../images/dress.jpg"
import Skirt from "../images/Skirt.jpg"
import Coat from "../images/Coat.jpg"
import hat from "../images/hat.jpg"
import lattice from "../images/lattice.jpg"

function AllProduct() {
  const [infoProduct, setInfoProduct] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItem = (kind) => {
    setFilterState(infoProduct);
    setFilterState((prevState) =>
      prevState.filter((product) => {
        return product.kind === kind;
      })
    );
  };

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "http://localhost:5002/clothesForFree/products"
        );
        setInfoProduct(data);
        setFilterState(data);
        console.log(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchDataProduct();
  }, []);

  console.log(infoProduct);

  return (
    <div>
      <div className="containerProduct">
        <div className="filter">
          
              <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("חולצה");
              }}
            >
              חולצה
            </button>
            <img src={shirt} alt="shirt" width={45}></img>
            </div>
            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("מכנסיים");
              }}
            >
              מכנסיים
            </button>
            <img src={pants} alt="shirt" width={50}></img>
            </div>
            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("גופיה");
              }}
            >
              גופיה
            </button>
            <img src={undershirt} alt="shirt" width={70}></img>

            </div>
            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("שמלה");
              }}
            >
              שמלה
            </button>
            <img src={dress} alt="shirt" width={50}></img>

            </div>
            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("מעיל");
              }}
            >
              חצאית
            </button>
            <img src={Skirt} alt="shirt" width={50}></img>
            </div>


            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("כובע");
              }}
            >
             כובע
            </button>
            <img src={hat} alt="shirt" width={50}></img>
            </div>


            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("סריג");
              }}
            >
              סריג
            </button>
            <img src={lattice} alt="shirt" width={44}></img>

            </div>
            <div className="kindAndIcon">
            <button
              onClick={() => {
                getItem("מעיל");
              }}
            >
              מעיל
            </button>
            <img src={Coat} alt="shirt" width={50}></img>

            </div>
         
        </div>
        <div className="allCards">
        {isLoading && <Spinner />}
        {infoProduct &&
          filterState.map((product) => {
            return (
              <div className="cardProduct" key={product._id}>
                <p className="kind">סוג הבגד: {product.kind}</p>
                <p>מידה: {product.size}</p>
                <p>צבע: {product.color}</p>
                <p>עונה: {product.season}</p>
                <p>מין הלובש:{product.gender_wear}</p>
                {/* <p>id: {product._id}</p> */}

                <img className="imgProduct" src={product.image} alt={"img"}></img>
                <div className="owners">
                  <p>בעלים:{product.user.name}</p>
                  <p>טלפון:{product.user.phoneNumber}</p>
                  <p>כתובת:{product.user.address}</p>
                </div>
              </div>
            );
          })}
          </div>
    </div>
    </div>
  );
}

export default AllProduct;
