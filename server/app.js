import express from "express"
import cors from "cors" 
import {indexRouter} from "./routes/index.routes.js"

const app=express()
app.use(cors({ credentials: true }));

app.use(express.json())
app.use(cors())

app.use("/clothesForFree",indexRouter)

export {app}