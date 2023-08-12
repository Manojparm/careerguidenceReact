import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/db.js'
import morgan from 'morgan'
const app=express()
dotenv.config()

const PORT=process.env.PORT

connectToDb()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to My ecounsulling App</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running at port http://localhost:${PORT}`)
})


