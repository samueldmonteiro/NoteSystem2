import express from 'express';
import { Register, Login, Logout, refreshAcessToken } from '../controllers/userControllers.js'

const router = express.Router();

router.post("/register", Register)
router.post("/login", Login)
router.post("/refresh", refreshAcessToken)
router.post("/logout", Logout)



export default router;