const TodoListModel = require("../models/TodoListModel");
const jwt = require('jsonwebtoken');

// todolist create
exports.CreateTodoList=(req,res)=>{
   let reqBody=req.body;
   let userName=req.headers['userName'];
   let todoSubject=reqBody['todoSubject'];
  let todoDescription=reqBody['todoDescription'];
  let todoStatus="New";
  let todoCreateDate=Date.now();
   let todoUpdateDate=Date.now();

   let PostBody={
      userName:userName,
      todoSubject:todoSubject,
      todoDescription:todoDescription,
      todoStatus:todoStatus,
      todoCreateDate:todoCreateDate,
      todoUpdateDate:todoUpdateDate
   }
   TodoListModel.create(PostBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"failed",data:err})
      }
      else{
         res.status(400).json({status:"success",data:data})
      }
   })
}

// select todo
exports.SelectToDo=(req,res)=>{
   let userName=req.headers['userName']
 
   TodoListModel.find({userName:userName},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

// update todo
exports.UpdateToDo=(req,res)=>{
   let reqBody=req.body;
   let todoSubject=reqBody['todoSubject'];
  let todoDescription=reqBody['todoDescription'];
  let _id=reqBody['_id']
   let todoUpdateDate=Date.now();

   let PostBody={  
      todoSubject:todoSubject,
      todoDescription:todoDescription, 
      todoUpdateDate:todoUpdateDate
   }
 
   TodoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

//update todo status

exports.UpdateToDoStatus=(req,res)=>{
   let reqBody=req.body;
  let _id=reqBody['_id']
  let todoStatus=reqBody['todoStatus']
let todoUpdateDate=Date.now();

   let PostBody={  
      
      todoStatus:todoStatus, 
      todoUpdateDate:todoUpdateDate
   }
 
   TodoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

