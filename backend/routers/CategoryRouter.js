import express from 'express'
import {getAllCategory, getProductByCategory} from "../controllers/CategoryController.js";
const CategoryRouter = express.Router()

CategoryRouter.post("/", getAllCategory);
CategoryRouter.post("/:id", getProductByCategory);

export default CategoryRouter