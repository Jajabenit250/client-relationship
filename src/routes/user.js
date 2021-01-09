// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

export default router;
