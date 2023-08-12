import mongoose from "mongoose";


const connectToDb=async()=>{
   try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected to database ${conn.connection.host}`)
   }catch(error){
     console.log(`Error in connection ${error} `)
   }
}


export default connectToDb