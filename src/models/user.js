/**
 * User base model
 */

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'User Email is required',
        max: 100
    },
    password: {
        type: String,
        // required: 'Password is required',
        max: 100
    },
    firstName: {
        type: String,
        required: 'FirstName is required',
        max: 100
    },
    lastName: {
        type: String,
        // required: 'LastName is required',
        max: 100
    },
    title: {
        type: String,
        // required: 'User title is required',
        max: 100
    },
    department: {
        type: String,
        // required: 'A Department is required',
        max: 100
    },
    organization: {
        type: String,
        // required: 'Organization is required',
        max: 100
    },
    workPhone: {
        type: String,
        // required: 'Work Phone is required',
        max: 100
    },
    organizationPhone: {
        type: String,
        // required: 'Organizational Phone is required',
        max: 100
    },
    verified: {
        type: Boolean,
        // required: 'if user email is verified is required',
        max: 100
    },
    token: {
        type: String,
        // required: 'User token is required',
        max: 100
    },
    creditCardNumber: {
        type: String,
        // required: 'other URL is required',
        max: 100 
    },
    expirationDate: {
        type: String,
        // required: 'other URL is required',
        max: 100 
    },
    cvs: {
        type: String,
        // required: 'other URL is required',
        max: 100 
    }
}, {timestamps: true});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Users', UserSchema);
