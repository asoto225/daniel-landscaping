import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
    mutation addReview($reviewText: String!, $reviewAuthor: String!, $rating: Int!) {
        addReview(reviewText: $reviewText, reviewAuthor: $reviewAuthor, rating: $rating) {
            _id
            reviewText
            reviewAuthor
            rating
            createdAt
        }
    }
`;