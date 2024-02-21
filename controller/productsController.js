import {getProductsdb,addProductdb} from '../model/db.js'


const getProducts = async (req,res)=>{
        res.send(await getProductsdb())
}
const addProduct = async (req,res)=>{
        const {prodName,quantity,amount,category,prodUrl}= req.body
        res.send(await addProductdb(prodName,quantity,amount,category,prodUrl))
}

export{getProducts,addProduct}