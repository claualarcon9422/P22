const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: [
            'admin',
            'user'
        ],
        default: 'user'
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart',
    }
})

module.exports = mongoose.model('user', userSchema);