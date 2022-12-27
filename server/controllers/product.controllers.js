import { ShopProducts } from "../models/product.models.js";
export const getProduct =async (req,res)=>{
    try{
        const products=await ShopProducts.find({});
        res.status(200).send(products)
    }
    catch{}
}


export const addProduct = async (req, res) => {
    try {
      const body = req.body;
      const newProduct = await ShopProducts.create(body);
      res.status(201).send(newProduct);
    } catch (err) {
      res.send(err.message);
    }
  };

  export const findProductById=async (req, res) => {
    const _id = req.params.id

    try {
        const product = await ShopProducts.findById(_id)

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
}
export const deleteProduct = async (req, res) => {
  try {
      const product = await ShopProducts.findByIdAndDelete(req.params.id)

      if (!product) {
          return res.status(404).send()
      }

      res.send(product)
  } catch (e) {
      res.status(500).send()
  }
}
export const updateProduct=async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['kind', 'size', 'color', 'season',"gender_wear","image"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      const product = await ShopProducts.findById(req.params.id)

      updates.forEach((update) => product[update] = req.body[update])
      await product.save()

      if (!product) {
          return res.status(404).send()
      }

      res.send(product)
  } catch (e) {
      res.status(400).send(e)
  }
}