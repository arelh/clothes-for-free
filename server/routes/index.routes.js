import { Router } from "express";
import { getUser,addUser, findUserById, deleteUser, updateUser, login, signup } from "../controllers/Users.controllers.js";
import { getProduct,addProduct, findProductById, deleteProduct, updateProduct, findProductByUserId } from "../controllers/product.controllers.js";
// import { checkAuth } from "../middlewares/checkAuth .js";

import cors from "cors"

export const indexRouter=Router()

indexRouter.get("/users",cors(),getUser)
indexRouter.get("/users/:id",cors(),findUserById)
indexRouter.post("/users/add",cors(),addUser)
indexRouter.delete("/users/delete/:id",cors(),deleteUser)
indexRouter.patch("/users/update/:id",cors(),updateUser)
indexRouter.post('/login', login);
indexRouter.post('/signup', signup);

//------------------------------------------------------------------
indexRouter.get("/products",cors(),getProduct)
indexRouter.get("/products/:id",cors(),findProductById)
indexRouter.get("/products/user/:id",cors(),findProductByUserId)
indexRouter.post("/products/add",cors(),addProduct)
indexRouter.delete("/products/delete/:id",cors(),deleteProduct)
indexRouter.patch("/products/update/:id",cors(),updateProduct)


