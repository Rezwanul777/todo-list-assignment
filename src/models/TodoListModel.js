const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
   userName:{type:String},
   todoSubject:{type:String},
   todoDescription:{type:String},
   todoStatus:{type:String,default:"New"},
   todoDate:{type:String,default:Date.now},
   
},{versionKey:false});

const TodoListModel=mongoose.model("todoLists",DataSchema)

module.exports=TodoListModel;