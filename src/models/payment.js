/**
 * Payment base model
 */

import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    amount: {
        type: String,
        required: 'Amount of Money Paid',
        max: 100
    },
    currency: {
        type: String,
        required: 'Currency is required',
        max: 100
    },
    subscriptionType: {
        type: String,
        required: 'Subscription Type is required',
        max: 100
    },
    startDate: {
        type: Date,
        required: 'Start Date is required',
        max: 100
    },
    subscriptedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Payments', PaymentSchema);
