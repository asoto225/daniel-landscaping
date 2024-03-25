import React from "react"; 
import NewReview from "../components/newReview";
import ReviewList from "../components/reviewList";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
        <ReviewList />
        <NewReview />
        </div>      
    );
}