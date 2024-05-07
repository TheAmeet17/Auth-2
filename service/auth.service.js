import * as jwt from 'jsonwebtoken'
const {signupBodySchema}=require ("../validators/auth.validation")
import {signupBodySchema} from '../validators/auth.validation'
import {z} from 'zod'
import Boom from'@hapi/boom'
const bcrypt=require ("bcrypt");



const signup=async(req,res)=>{
    const {username,email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exist"});

        }
        const hashedPassword=await bcrypt.hash(password,10);
         
        const token=jwt.sign({email:result.email,id :result._id},SECRET_KEY);
        res.status(201).json({message:"Something went wrong"});
    } catch (error) {
        
    }
}