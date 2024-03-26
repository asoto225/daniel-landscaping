import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../utils/query";

const ReviewList = () => {
    const { loading, data, refetch } = useQuery(QUERY_REVIEWS);
    useEffect(() => {
        refetch();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    //pulls the reviews from the data object and places them in a new array so they can be sorted. 
    const reviews = [...data.reviews]
    //sorts reviews by rating in descending order
    const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);
    //pulls the top 3 reviews from the sorted array
    const topReviews = sortedReviews.slice(0, 3);
    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {sortedReviews.map((review) => (
                    <li key={review._id}>
                        <p>Rating: {review.rating}</p>
                        <p>{review.reviewText}</p>
                        <p>Author: {review.reviewAuthor}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ReviewList;