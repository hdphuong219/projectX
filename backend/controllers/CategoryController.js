import {CategoryModel} from "../models/CategoryModel.js";
import expressAsyncHandler from "express-async-handler";
import {ProductModel} from "../models/ProductModel.js";

export const getAllCategory = expressAsyncHandler(async (req, res) => {
    const category = await CategoryModel.find({})
    res.send(category)
})

export const getProductByCategory = expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.find({category_id: req.params.id})
    if (product) {
        res.send(product)
    } else {
        res.send({message: 'product not found'})
    }
})