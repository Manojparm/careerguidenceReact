import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/db.js'
import morgan from 'morgan'
import authRoutes from './route/userRoutes.js'

dotenv.config()

//connecting to database
connectToDb()

//creating express object
const app=express()


//defined port
const PORT=process.env.PORT || 8000



//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to My ecounsulling App</h1>")
})

//listening the port 
app.listen(PORT,()=>{
    console.log(`Server is running at port http://localhost:${PORT}`)
})


