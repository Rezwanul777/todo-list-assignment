const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
   userName:{type:String},
   todoSubject:{type:String},
   todoDescription:{type:String},
   todoStatus:{type:String,default:"New"},
   todoCreateDate:{type:Date},
   todoUpdateDate:{type:Date}
   
},{versionKey:false});

const TodoListModel=mongoose.model("todoLists",DataSchema)

module.exports=TodoListModel;