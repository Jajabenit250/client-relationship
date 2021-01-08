// Mobile phone short codes base model

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    password: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    firstName: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    lastName: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    title: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    department: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    organization: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    workPhone: {
        type: String,
        required: 'A code is required',
        max: 100
    },
    organizationPhone: {
        type: String,
        required: 'A code is required',
        max: 100
    }
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Codes', UserSchema);