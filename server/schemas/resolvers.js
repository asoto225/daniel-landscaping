const { Review } = require('../models');

const resolvers = {
    Query: {
        reviews: async () => {
            return Review.find();
        }
    },

    Mutation: {
        addReview: async (parent, { reviewText, reviewAuthor, rating }) => {
            return Review.create({ reviewText, reviewAuthor, rating });
        }
    }

}

module.exports = resolvers;