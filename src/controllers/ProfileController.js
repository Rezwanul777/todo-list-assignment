const ProfileModel = require("../models/ProfileModel");

// create profile
exports.CreateProfile=(req,res)=>{
   let reqBody=req.body;
   ProfileModel.create(reqBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"failed",err:data})
      }
      else{
         res.status(400).json({status:"success",data:data})
      }
   })
}