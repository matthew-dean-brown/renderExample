import express from 'express'
import { config } from 'dotenv'
import productsRouter from './routes/products.js'
import cors from 'cors'
config()

const PORT = process.env.PORT
const app = express()



app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)


app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT)
})