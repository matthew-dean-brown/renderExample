import {pool} from '../config/config.js'


const getProductsdb= async () => {
    const [result] = await pool.query(`
    SELECT * FROM products
    `)
    return result
}
const addProductdb = async (prodName,quantity,amount,category,prodUrl) => {
    const [result] = await pool.query(`
    INSERT INTO products (prodName,quantity,amount,category,prodUrl)
    VALUES (?,?,?,?,?)
    `,[prodName,quantity,amount,category,prodUrl])
    return getProductsdb()
}



// console.log(await getProductsdb())
export {getProductsdb, addProductdb}