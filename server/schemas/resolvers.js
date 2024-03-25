const { Review } = require('../models');

const resolvers = {
    Query: {
        reviews: async () => {
            return Review.find();
        }
    },

    Mutation: {
        addReview: async (parent, { reviewText, reviewAuthor }) => {
            return Review.create({ reviewText, reviewAuthor });
        }
    }

}

module.exports = resolvers;