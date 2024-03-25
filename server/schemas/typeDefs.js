const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Review {
        _id: ID
        reviewText: String
        reviewAuthor: String
        createdAt: String
    }
    type Query {
        reviews: [Review]
    }
    type Mutation {
        addReview(reviewText: String!, reviewAuthor: String!): Review
    }
`;

module.exports = typeDefs;