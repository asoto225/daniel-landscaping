import React, { useEffect } from "react";
import ReactStars from "react-stars";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../utils/query";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
    //shuffles the sorted array
    const shuffledReviews = shuffleArray(reviews);
    //sorts reviews by rating in descending order
    const sortedReviews = shuffledReviews.sort((a, b) => b.rating - a.rating);
    return (
        <div className="">
            <h1>Reviews</h1>
            <p>See what our previous customers have said about us!</p>
            <ul className="reviews-container">
                {sortedReviews.map((review) => (
                    <li key={review._id} className="reviews">
                        <div>
                        Rating:
                            <ReactStars
                                count={5}
                                value={review.rating}
                                edit={false}
                                size={24}
                                color1={'black'}
                                color2={'#ffd700'}
                            />
                        </div>
                        <p>Author: {review.reviewAuthor}</p>
                        <p>{review.reviewText}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ReviewList;