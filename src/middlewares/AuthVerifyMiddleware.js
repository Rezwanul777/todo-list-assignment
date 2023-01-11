const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
   
   let Token=req.headers['token-key']
   jwt.verify(Token, 'SecretKey1234567890', (err, decoded)=> {
      if (err) {
       
       res.status(401).json({status:"unauthorized"})
      }
      else{
          // get username from decoded token and add req headers
          let username=decoded['data']['userName']
          req.headers.username=username;
         next()
      }
    });
}