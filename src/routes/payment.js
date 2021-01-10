// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import paymentController from '../controllers/payment';
import userMiddleware from '../middlewares/user';
import { validateCardProfileBody } from '../utils/validations/user';

const router = express.Router();

router.post('/subscribe/:projectId', userMiddleware.headerTokenVerification, paymentController.subscriptions);
router.get('/subscribe/:paymentId', userMiddleware.headerTokenVerification, paymentController.viewPaymentInformation);
router.patch('/info', userMiddleware.headerTokenVerification, validateCardProfileBody, paymentController.collectPaymentInformation);
// router.post('/automate', paymentController);


export default router;
