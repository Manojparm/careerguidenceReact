import userModel from '../models/userModel.js'
import { hashPassword } from './../helpers/authHelper.js';

export const registerController=async(req,res)=>{
   try{
         const  { name ,email,password,phone,address}=req.body;
         //validation
         if(!name){
            return res.send({error:"name not found"});
         }
         if(!email){
            return res.send({error:"email in not found"});
         }
         if(!password){
            return res.send({error:"password is not found"});
         }
         if(!phone){
            return res.send({error:"phone is not found"});
         }
         if(!address){
            return res.send({error:"address is not found"});
         }
      //check user
      const existingUser=await userModel.findOne({email})
      //existing user
      if(existingUser){
        res.status(200).send({
            success:true,
            messgage:"user already registered please login"

        })
      }
     //register user
     const hashedPassword=await hashPassword(password)
     //save user
     const user=await new userModel({name,email,phone,address,password:hashedPassword}).save()
     
     res.status(201).send({
        success:true,
        messgage:"user registered sucessfully",
        user
     })

   }
   catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        messgage:"error in registration",
        error
    })
   }
}
