const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//rough draft, need to update
const reviewSchema = new Schema({
    reviewText: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                return value.length > 0;
            },
            message: 'Review text cannot be empty.'
        },
        minlength: 1
    },
    reviewAuthor: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value.length > 0;
            },
            message: 'Review author cannot be empty.'
        }
    },
    rating: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value > 0;
            },
            message: 'Rating must be greater than zero.'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
    });

const Review = model('Review', reviewSchema);

module.exports = Review;