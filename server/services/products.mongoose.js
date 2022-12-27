import {ShopProducts} from "../models/product.models.js"

export const addProductToMongo =async(productObj)=>{
    const newProduct=await ShopProducts.create(productObj)
    return newProduct
}