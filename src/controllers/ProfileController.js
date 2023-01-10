const ProfileModel = require("../models/ProfileModel");

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

exports.UserLogin=(req,res)=>{

      let UserName=req.body['userName']
      let Password=req.body['password']
      ProfileModel.find({userName:UserName,password:Password},(err,data)=>{
         if(err){
            res.status(400).json({status:"success",data:err})
         }else{
            if(data.length>0){
               res.status(200).json({status:"success",data:data})
            }
            else{
               res.status(401).json({status:"unauthorized"})
            }
         }
      })         
}