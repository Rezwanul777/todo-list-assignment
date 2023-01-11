const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');

// create profile
exports.CreateProfile=(req,res)=>{
   let reqBody=req.body;
   ProfileModel.create(reqBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"failed",data:err})
      }
      else{
         res.status(400).json({status:"success",data:data})
      }
   })
}

// user login
exports.UserLogin=(req,res)=>{

      let UserName=req.body['userName']
      let Password=req.body['password']
      ProfileModel.find({userName:UserName,password:Password},(err,data)=>{
         if(err){
            res.status(400).json({status:"success",data:err})
         }else{
            if(data.length>0){
               let Payload={
                  exp: Math.floor(Date.now() / 1000) + (720*60 * 60),data:data[0]
               }
               let token=jwt.sign(Payload,'SecretKey1234567890')
               res.status(200).json({status:"success",token:token,data:data})
            }
            else{
               res.status(401).json({status:"unauthorized"})
            }
         }
      })         
}

// user Select Profile

exports.SelectProfile=(req,res)=>{
   let userName=req.headers['username']
 
   ProfileModel.find({userName:userName},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

// update profile

exports.UpdateProfile=(req,res)=>{
   let userName=req.headers['userName']
   let reqBody=req.body

   ProfileModel.updateOne({userName:userName},{$set:reqBody},{upsert:true},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}
