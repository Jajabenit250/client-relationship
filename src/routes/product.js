// Admin can Assign Roles and Approves Business Owners
// Business Owner can add product , Requirements, Timeline
// Partners can Update and add Designs, Bugs Review and Progress

import express from 'express';
import productContoller from '../controllers/product';

const router = express.Router();

router.post('/add', productContoller.createProduct);
router.post('/view/:productId', productContoller.viewProduct);

export default router;
