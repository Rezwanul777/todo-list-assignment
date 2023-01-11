const TodoListModel = require("../models/TodoListModel");
const jwt = require('jsonwebtoken');

// todolist create
exports.CreateTodoList=(req,res)=>{
   let reqBody=req.body;
   TodoListModel.create(reqBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"failed",data:err})
      }
      else{
         res.status(400).json({status:"success",data:data})
      }
   })
}