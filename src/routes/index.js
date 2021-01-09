import express from 'express';
import userRoute from './user';
import productRoute from './product';
import paymentRoute from './payment';

const Router = express.Router();
Router.use('/auth', userRoute);
Router.use('/product', productRoute);
Router.use('/payment', paymentRoute);


export default Router;
