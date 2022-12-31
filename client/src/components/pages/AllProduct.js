import { useEffect, useState } from "react";
import axios from "axios"
import Spinner from '../Spinner';

function AllProduct() {
  const [infoProduct, setInfoProduct] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchDataProduct=async ()=>{
      try{
        setIsLoading(true)
        const {data}=await axios.get("http://localhost:5002/clothesForFree/products")
        
        console.log(data);
        setInfoProduct(data)
        setIsLoading(false)
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }
    fetchDataProduct()
  },[])
  
  useEffect(()=>{
    const fetchDataUser=async ()=>{
      try{
        setIsLoading(true)
        const {data}=await axios.get("http://localhost:5002/clothesForFree/users")
        console.log(data);
        setInfoUser(data)
        setIsLoading(false)
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }
    fetchDataUser()
  },[])


  return (
    <div className="container">
    <div  className="containerProduct" >
      {isLoading&&<Spinner/>}
      {infoProduct.map((user)=>{
        return(
          <div className="cardProduct" >
          <p>סוג הבגד: {user.kind}</p>
          <p>מידה: {user.size}</p>
          <p>צבע: {user.color}</p>
          <p>עונה: {user.season}</p>
          <p>מין הלובש:{user.gender_wear}</p>
         </div>
        )
      })}
      </div>
    <div  className="containerUser" >
      {isLoading&&<Spinner/>}
      {infoUser.map((user)=>{
        return(
          <div className="cardUser" >
          <p>שם: {user.name}</p>
          <p>כתובת: {user.address}</p>
          <p>מספר פלאפון: {user.phoneNumber}</p>
         </div>
        )
      })}
      </div>
    </div>
  )
}

export default AllProduct