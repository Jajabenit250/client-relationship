// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import userController from '../controllers/user';
import userMiddleware from '../middlewares/user';
import { validateUpdateProfileBody } from '../utils/validations/user'

const router = express.Router();

router.post('/signup', userController.signUp);
router.get('/activate/:autorizations', userMiddleware.paramTokenVerification, userController.updateUser);
router.post('/signin', userController.signIn);
router.patch('/profile', userMiddleware.headerTokenVerification, validateUpdateProfileBody, userController.editProfile);

export default router;
