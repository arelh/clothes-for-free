import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



function ProductUser() {

  const [KindVal, setKindVal] = useState("");
  const [SizeVal, setSizeVal] = useState("");
  const [ColorVal, setColorVal] = useState("");
  const [SeasonVal, setSeasonVal] = useState("");
  const [GenderWearVal, setGenderWearVal] = useState("");

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

const handleAddProduct=()=>{
  const {data}=axios.post("http://localhost:5002/clothesForFree/products/add",{
    "kind": KindVal,
    "size": SizeVal,
    "color":ColorVal,
    "season": SeasonVal, 
    "gender_wear":GenderWearVal
  }
  )
  console.log(data);
}

  return (
    <div className="ProductUser">
        <button className="btn_addProduct"> <Link to="/EnterNewProduct" className="link">הוסף פריט</Link> </button>
      <div className="containerProductUser">
        <div className="titleProductUser">
          <p>הבגדים שלי</p>
        </div>
      </div>
    </div>
  );
}

export default ProductUser;
