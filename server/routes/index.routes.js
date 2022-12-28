import { Router } from "express";
import { getUser,addUser, findUserById, deleteUser, updateUser } from "../controllers/Users.controllers.js";
import { getProduct,addProduct, findProductById, deleteProduct, updateProduct } from "../controllers/product.controllers.js";

import cors from "cors"

export const indexRouter=Router()

indexRouter.get("/users",cors(),getUser)
indexRouter.get("/users/:id",cors(),findUserById)
indexRouter.post("/users/add",cors(),addUser)
indexRouter.delete("/users/delete/:id",cors(),deleteUser)
indexRouter.patch("/users/update/:id",cors(),updateUser)
// indexRouter.patch("/users/login",cors(),loginUser)

//------------------------------------------------------------------
indexRouter.get("/products",cors(),getProduct)
indexRouter.post("/products/add",cors(),addProduct)
indexRouter.get("/products/:id",cors(),findProductById)
indexRouter.delete("/products/delete/:id",cors(),deleteProduct)
indexRouter.patch("/products/update/:id",cors(),updateProduct)


