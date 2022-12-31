import React from "react";

function EnterNewProduct() {
  return (
    <div className="addProduct">
      <div className="cardBs peh">
        <h1>הוסף פריט חדש</h1>
        <div className="newItem">
          <p className="peh">סוג הבגד</p> <input className="inputEd"></input>
        </div>
        <div className="newItem">
          <p className="peh">מידה</p> <input className="inputEd"></input>
        </div>
        <div className="newItem">
          <p className="peh">צבע</p> <input className="inputEd"></input>
        </div>
        <div className="newItem">
          <p className="peh">עונת השנה</p> <input className="inputEd"></input>
        </div>
        <div className="newItem">
          <p className="peh">מין הלובש</p> <input className="inputEd"></input>
        </div>
        <button> הוסף תמונה</button>
        <button className="btn-Edit peh">הוסף למאגר</button>
      </div>
    </div>
  );
}

export default EnterNewProduct;
