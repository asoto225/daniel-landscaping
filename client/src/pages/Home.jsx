import React from "react"; 
import NewReview from "../components/newReview";
import TopReviewList from "../components/topReviews";
import landscaping from "../assets/landscaping.jpeg";

const Home = () => {
    return (
        <div>
            <div>
                <h1>Home</h1>
                <img src={landscaping} alt="landscaping Tucson, Arizona" />
                <p>"Where quality and value mean something"</p>
            </div>
        <TopReviewList />

        <NewReview />
        </div>      
    );
}

export default Home;