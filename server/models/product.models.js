import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    kind: { type: String },
    size: { type: String },
    color: { type: String },
    season: { type: String,require:true },
    gender_wear: { type: String },
    image: { type: String },
    
  });
  
  const ShopProducts = mongoose.model("ShopProducts", productSchema);
  
  export { ShopProducts };
  