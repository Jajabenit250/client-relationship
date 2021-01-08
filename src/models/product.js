// Mobile phone short codes base model

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    name: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    type: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    description: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    startDate: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    endDate: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    attachments: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    otherLinks: {
        type: String,
        required: 'A code is required',
        max: 100
    }
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Codes', ProductSchema);