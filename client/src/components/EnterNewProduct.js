import React from "react";
import axios from "axios";
import { useState } from "react";

function EnterNewProduct(props) {


  const [KindVal, setKindVal] = useState("");
  const [SizeVal, setSizeVal] = useState("");
  const [ColorVal, setColorVal] = useState("");
  const [SeasonVal, setSeasonVal] = useState("");
  const [GenderWearVal, setGenderWearVal] = useState("");
  // const [massage,setMassage]=useState()
  // const [idVal, setidVal] = useState("");
  // const [Massage, setMassage] = useState(false);
  



const handleInputKind= ({target:{value}})=>{
  setKindVal(value)
}
const handleInputSize= ({target:{value}})=>{
  setSizeVal(value)
}
const handleInputColor= ({target:{value}})=>{
  setColorVal(value)
}
const handleInputSeason= ({target:{value}})=>{
  setSeasonVal(value)
}
const handleInputGenderWear= ({target:{value}})=>{
  setGenderWearVal(value)
}


const handleAddProduct=(id)=>{
  const {data}=axios.post("http://localhost:5002/clothesForFree/products/add",{
    "kind": KindVal,
    "size": SizeVal,
    "color":ColorVal,
    "season": SeasonVal, 
    "gender_wear":GenderWearVal,
    "userId": props.id
  }
  )
  console.log(props.id);
console.log(data);}


  return (
    <div className="addProduct"  style={{ backgroundColor: "brown" }}>
      <div className="cardBs peh">
        <h1>הוסף פריט חדש</h1>
        <div className="newItem">
          <p className="peh">סוג הבגד</p> <input className="inputEd" onChange={handleInputKind}></input>
        </div>
        <div className="newItem">
          <p className="peh">מידה</p> <input className="inputEd" onChange={handleInputSize}></input>
        </div>
        <div className="newItem">
          <p className="peh">צבע</p> <input className="inputEd" onChange={handleInputColor}></input>
        </div>
        <div className="newItem">
          <p className="peh">עונת השנה</p> <input className="inputEd" onChange={handleInputSeason}></input>
        </div>
        <div className="newItem">
          <p className="peh">מין הלובש</p> <input className="inputEd" onChange={handleInputGenderWear}></input>
        </div>
        <button> הוסף תמונה</button>
        <button className="btn-Edit peh" onClick={handleAddProduct}>הוסף למאגר</button>
      </div>
    </div>
  );
}

export default EnterNewProduct;
