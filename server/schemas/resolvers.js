const { Review } = require('../models');

const resolvers = {
    Query: {
        reviews: async (_, { limit, offset, randomize }) => {
            let reviews;
            if (limit !== undefined && offset !== undefined) {
                reviews = await Review.find()
                    .limit(limit)
                    .skip(offset)
                    .sort({ rating: -1 });
            } else {
                reviews = await Review.find().sort({ rating: -1 });
            }
      
      // Randomization logic based on the 'randomize' parameter
      if (randomize) {
        for (let i = reviews.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
        }
      }

      return reviews;
        }
    },

    Mutation: {
        addReview: async (parent, { reviewText, reviewAuthor, rating }) => {
            return Review.create({ reviewText, reviewAuthor, rating });
        }
    }

}

module.exports = resolvers;