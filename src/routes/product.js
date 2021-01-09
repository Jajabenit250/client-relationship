// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import userController from '../controllers/user';
// import verifyToken from '../middlewares/verifyToken';
// import verifyAdmin from '../middlewares/verify.admin';

const router = express.Router();

router.post('/add', userController.signUp);
router.post('/view', userController.signIn);

export default router;
