// import React from "react";
// import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";



function ProductUser() {

 


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
