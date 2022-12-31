import { ShopUsers } from "../models/user.models.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";


export const getUser = async (req, res) => {
  try {
    const users = await ShopUsers.find({});
    res.status(200).send(users);
  } catch (err) {
    res.send(err.message);
  }
};

export const addUser = async (req, res) => {
  const user = new ShopUsers(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const findUserById = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await ShopUsers.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await ShopUsers.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

export const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "email",
    "password",
    "address",
    "phoneNumber",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await ShopUsers.findById(req.params.id);

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    if (!user) {
      return res.status(404).send();
    }
    console.log(user);
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;

  ShopUsers.find({ email }).then((users) => {
    if (users.length === 0) {  //If there is no user
      return res.status(401).json({
        message: "Auth failed",
      });
    }

    const [user] = users;

    bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1H",
          }
        );

        return res.status(200).json({
          message: "Auth successful",
          token,
        });
      }

      res.status(401).json({
        message: "Auth failed",
      });
    });
  });
};

export const signup= (req, res) => {
  const { email, password } = req.body;

  ShopUsers.find({ email }).then((users) => {
      if (users.length >= 1) {
          return res.status(409).json({
              message: 'Email exists'
          })
      }

      bcrypt.hash(password, 10, (error, hash) => {
          if (error) {
              return res.status(500).json({
                  error
              })
          }

          const user = new ShopUsers({
              _id: new mongoose.Types.ObjectId(),
              email,
              password: hash//save the hash into dataBase
          })

          user.save().then((result) => {
              console.log(result);

              res.status(200).json({
                  message: 'User created'
              });
          }).catch(error => {
              res.status(500).json({
                  error
              })
          });
      });
  })
}