import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../utils/query";

const ReviewsPerPage = 5;

const ReviewList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, data, refetch } = useQuery(QUERY_REVIEWS, {
        variables: {
            limit: ReviewsPerPage,
            offset: (currentPage - 1) * ReviewsPerPage,
            randomize: true
        }
    });

    useEffect(() => {
        refetch();
    }, [currentPage]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const reviews = data.reviews || [];
    return (
        <div className="">
            <h1>Reviews</h1>
            <p>See what our previous customers have said about us!</p>
            <ul className="reviews-container">
                {reviews.map((review) => (
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
            <div>
                {/* Pagination controls */}
                <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    )
};

export default ReviewList;