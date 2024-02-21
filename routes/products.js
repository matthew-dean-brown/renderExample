import express from 'express'
import {getProducts,addProduct} from '../controller/productsController.js'
const router = express.Router()

router.get('/',getProducts)
router.post('/',addProduct)

export default router