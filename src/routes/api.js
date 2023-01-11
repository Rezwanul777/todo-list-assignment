const express = require('express');
const ProfileController=require('../controllers/ProfileController')
const authVerifyMiddleware=require('../middlewares/authVerifyMiddleware')
const router=express.Router();



router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin", ProfileController.UserLogin)

router.get("/SelectProfile",authVerifyMiddleware,ProfileController.SelectProfile)
router.put("/UpdateProfile",authVerifyMiddleware,ProfileController.UpdateProfile)


module.exports=router;