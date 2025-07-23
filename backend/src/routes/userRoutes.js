import express from 'express';
import { Register, Login, Logout, refreshAcessToken } from '../controllers/userControllers.js'
import { registerValidator } from '../validators/userValidators.js';
import { validate } from '../middlewares/authValidateMiddleware.js';

const router = express.Router();

router.post("/register", validate(registerValidator), Register)
router.post("/login", Login)
router.post("/refresh", refreshAcessToken)
router.post("/logout", Logout)



export default router;