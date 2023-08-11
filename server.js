import express from 'express'
import dotenv from 'dotenv'

const app=express()
dotenv.config()

const PORT=process.env.PORT

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to My ecounsulling App</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running at port http://localhost:${PORT}`)
})


