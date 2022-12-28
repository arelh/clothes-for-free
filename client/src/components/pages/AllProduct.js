import { useEffect, useState } from "react";
import axios from "axios"
import Spinner from '../Spinner';

function AllProduct() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        setIsLoading(true)
        const {data}=await axios.get("http://localhost:5002/clothesForFree/products")
        console.log(data);
        setInfo(data)
        setIsLoading(false)
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }
    fetchData()
  },[])


  return (
    <div  className="containerProduct" >
      {isLoading&&<Spinner/>}
      {info.map((user)=>{
        return(
         <div className="card" key={user.id} >
          <p>סוג הבגד: {user.kind}</p>
          <p>מידה: {user.size}</p>
          <p>צבע: {user.color}</p>
          <p>עונה: {user.season}</p>
          <p>מין הלובש:{user.gender_wear}</p>
         </div>
        )
      })}
    </div>
  )
}

export default AllProduct