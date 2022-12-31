import {app} from "./server/app.js"
import "./server/db/mongoose.js"
// import bcrypt from "bcryptjs"

const PORT=process.env.PORT||5002

app.listen(PORT,()=>{
    console.log("listen on port"+PORT);
})

// const myFunction=async()=>{
// const password="red123"
// const hashedPassword=await bcrypt.hash(password,2)

// console.log(password);
// console.log(hashedPassword);
// const isMatch=await bcrypt.compare("Red123",hashedPassword)
// console.log(isMatch);
// }

// myFunction()