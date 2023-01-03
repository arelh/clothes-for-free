import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true,
    lowercase: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },

  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  address: { type: String, trim: true, lowercase: true },
  phoneNumber: { type: Number },
  products:{type: Array},
  // tokens:[{
  //   token:{
  //     type:String,required: true
  //   }
  // }]
  
});

// userSchema.virtual("products",{
//   ref:"Product",
//   localField:__dirname,
//   foreignField:"owner"
// })




userSchema.static.findByCredentials=async (email,password)=>{
   const user = await ShopUsers.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}



// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
  
//   next();
// });

const ShopUsers = mongoose.model("ShopUsers", userSchema);
export { ShopUsers };
