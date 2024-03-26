import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
    query reviews($limit: Int, $offset: Int, $randomize: Boolean) {
        reviews (limit: $limit, offset: $offset, randomize: $randomize) {
            _id
            reviewText
            reviewAuthor
            rating
            createdAt
        }
    }
`;