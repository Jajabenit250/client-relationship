// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import productContoller from '../controllers/product';
import userMiddleware from '../middlewares/user';

const router = express.Router();

router.post('/add', userMiddleware.headerTokenVerification, productContoller.createProduct);
router.get('/view/:productId', productContoller.viewProduct);

export default router;
