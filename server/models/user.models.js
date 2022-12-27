import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: { type: String,required: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    } },
    password: { type: String,required: true,
      minlength: 8,
      trim: true,
      validate(value) {
          if (value.toLowerCase().includes('password')) {
              throw new Error('Password cannot contain "password"')
          }
      } },
  phoneNumber: { type: Number },
  address: { type: String },
});

const ShopUsers = mongoose.model("ShopUsers", userSchema);

export { ShopUsers };
