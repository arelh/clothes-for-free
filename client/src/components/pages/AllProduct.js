import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";

function AllProduct() {
  const [infoProduct, setInfoProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "http://localhost:5002/clothesForFree/products"
        );
        setInfoProduct(data);
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
        {isLoading && <Spinner />}
        {infoProduct.map((user) => {
          return (
            
            <div className="cardProduct" key={user._id}>
              <p>סוג הבגד: {user.kind}</p>
              <p>מידה: {user.size}</p>
              <p>צבע: {user.color}</p>
              <p>עונה: {user.season}</p>
              <p>מין הלובש:{user.gender_wear}</p>
              <div className="owners">
              <p>בעלים:{user.user.name}</p>
              <p>טלפון:{user.user.phoneNumber}</p>
              <p>כתובת:{user.user.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
