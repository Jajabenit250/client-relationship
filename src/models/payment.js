// Mobile phone short codes base model

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
        required: 'Currency',
        max: 100
    }
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Payments', PaymentSchema);
