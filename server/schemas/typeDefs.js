const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Review {
        _id: ID
        reviewText: String
        reviewAuthor: String
        rating: Int
        createdAt: String
    }
    type Query {
        reviews: [Review]
    }
    type Mutation {
        addReview(reviewText: String!, reviewAuthor: String!, rating: Int!): Review
    }
`;

module.exports = typeDefs;