import { ShopUsers } from "../models/user.models.js";
export const getUser =async (req,res)=>{
    try{
        const users=await ShopUsers.find({});
        res.status(200).send(users)
    }
    catch{}
}


export const addUser = async (req, res) => {
    try {
      const body = req.body;
      const newUser = await ShopUsers.create(body);
      res.status(201).send(newUser);
    } catch (err) {
      res.send(err.message);
    }
  };

  export const findUserById=async (req, res) => {
    const _id = req.params.id

    try {
        const user = await ShopUsers.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
}
export const deleteUser = async (req, res) => {
  try {
      const user = await ShopUsers.findByIdAndDelete(req.params.id)

      if (!user) {
          return res.status(404).send()
      }

      res.send(user)
  } catch (e) {
      res.status(500).send()
  }
}

export const updateUser=async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'address',"phoneNumber"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      const user = await ShopUsers.findById(req.params.id)

      updates.forEach((update) => user[update] = req.body[update])
      await user.save()

      if (!user) {
          return res.status(404).send()
      }

      res.send(user)
  } catch (e) {
      res.status(400).send(e)
  }
}