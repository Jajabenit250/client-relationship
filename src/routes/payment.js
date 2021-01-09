// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import paymentController from '../controllers/payment';

const router = express.Router();

router.post('/subscribe/:projectId', paymentController.subscriptions);
router.get('/subscribe/:paymentId', paymentController.subscriptions);
router.patch('/info', paymentController.collectPaymentInformation);
// router.post('/automate', paymentController);


export default router;
