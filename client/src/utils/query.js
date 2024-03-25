import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
    query reviews {
        reviews {
            _id
            reviewText
            reviewAuthor
            rating
            createdAt
        }
    }
`;