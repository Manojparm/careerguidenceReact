import express from 'express'
import {loginController, registerController, testController} from '../controllers/userController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router=express.Router()

//register method post
router.post('/register',registerController)

//login Method post

router.post('/login',loginController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController)

export default router