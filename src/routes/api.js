const express = require('express');
const ProfileController=require('../controllers/ProfileController')
const ToDoListController=require('../controllers/ToDoListController')
const authVerifyMiddleware=require('../middlewares/authVerifyMiddleware')
const router=express.Router();



// router end point connection
// Profile routing
router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin", ProfileController.UserLogin)

router.get("/SelectProfile",authVerifyMiddleware,ProfileController.SelectProfile)
router.put("/UpdateProfile",authVerifyMiddleware,ProfileController.UpdateProfile)


// Todo list routing
// create To do list
router.post("/CreateTodoList",authVerifyMiddleware,ToDoListController.CreateTodoList)
// select todolist
router.get("/SelectToDo",authVerifyMiddleware,ToDoListController.SelectToDo)
// update todo list
router.put("/UpdateToDo",authVerifyMiddleware,ToDoListController.UpdateToDo)

// update todo status
router.put("/UpdateToDoStatus",authVerifyMiddleware,ToDoListController.UpdateToDoStatus)

// delete router 

router.delete("/DeleteToDo",authVerifyMiddleware,ToDoListController.DeleteToDo)

//SelectToDoStatus

router.get("/SelectToDoStatus",authVerifyMiddleware,ToDoListController.SelectToDoStatus)

//SelectToDoByDate

router.get("/SelectToDoByDate",authVerifyMiddleware,ToDoListController.SelectToDoByDate)

module.exports=router;