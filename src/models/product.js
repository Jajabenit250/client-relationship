/**
 * Product base model
 */
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    name: {
        type: String,
        required: 'Product Name is required',
        max: 100
    },
    type: {
        type: String,
        required: 'Product Type is required',
        max: 100
    },
    description: {
        type: String,
        required: 'Product Description is required',
        max: 100
    },
    startDate: {
        type: String,
        required: 'Product Implementation Start Date is required',
        max: 100
    },
    endDate: {
        type: String,
        required: 'Product Implementation End Date  is required',
        max: 100
    },
    attachments: {
        type: String,
        required: 'Attachments are required',
        max: 100
    },
    otherLinks: {
        type: String,
        required: 'other URL is required',
        max: 100
    },
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Products', ProductSchema);
