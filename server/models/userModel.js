import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true,trim:true,minLength:3},
    email:{type:String,match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,required:true,unique:true},
    password:{type:String,required:true},
},{timestamps:true})


const userModel=mongoose.model("users",userSchema)

export default userModel