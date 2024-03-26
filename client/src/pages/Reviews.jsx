import React from "react";
import ReviewList from "../components/reviewList";
import { Link } from "react-router-dom";

export default function Reviews() {
    return (
        <div className="review-content">
            <ReviewList />
            <div>
                <p>Want to review our services? Add a new review here!</p>
                <Link to='/leaveReview'>New Review</Link>
            </div>
        </div>
    );
}