import mongoose from "mongoose";
// import validator from "validator";
// import bcrypt from "bcryptjs"


const productSchema = new mongoose.Schema({
    kind: { type: String },
    size: { type: String },
    color: { type: String },
    season: { type: String,require:true },
    gender_wear: { type: String },
    image: { type: String },
    userId:{type:String}
    
  });
  
  const ShopProducts = mongoose.model("ShopProducts", productSchema);
  
  export { ShopProducts };
  