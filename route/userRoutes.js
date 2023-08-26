import express from 'express'
import {loginController, registerController} from '../controllers/userController.js'

//router object
const router=express.Router()

//register method post
router.post('/register',registerController)

//login Method post

router.post('/login',loginController)


export default router