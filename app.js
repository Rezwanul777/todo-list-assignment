//project basic structure
const express = require('express');
const router = require('./src/routes/api');
const app=new express();
const bodyParser=require('body-parser')

// securityMiddleware structure
const rateLimit=require('express-rate-limit')
const hpp=require('hpp')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const cors=require('cors')
const xssClean=require('xss-clean')

// database setup import
const mongoose=require('mongoose')

// security middleware implement
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean())

// body parser implemnet
app.use(bodyParser.json())

// limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//Database connection esrtablish
let uri='mongodb://127.0.0.1:27017/Todo-assignment'
let options={user:'',pass:''}
mongoose.set('strictQuery', true);
mongoose.connect(uri, options, function(error) {
   // Check error in initial connection. There is no 2nd param to the callback.
   if(error){
      console.log(error);
   }else{
      console.log("connection is success");
   }
 });

 // routing implement

 app.use("/api/v1",router)

 // undefined routing implement

 app.use('*',(req,res)=>{
   res.status(404).json({status:"failed",data:"Not found"})
 })

 module.exports=app;