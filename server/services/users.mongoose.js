import {ShopUsers} from "../models/user.models.js"

export const addUserToMongo =async(userObj)=>{
    const newUser=await ShopUsers.create(userObj)
    return newUser
}