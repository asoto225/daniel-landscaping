const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//rough draft, need to update
const reviewSchema = new Schema({
    reviewText: {
        type: String,
        required: 'You need to leave a review!',
        minlength: 1,
        maxlength: 280
    },
    reviewAuthor: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
    });

const Review = model('Review', reviewSchema);

module.exports = Review;