import React from "react"; 
import TopReviewList from "../components/topReviews";
import landscaping from "../assets/landscaping.jpeg";

const Home = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Daniel & Son's Landscaping</h1>
                <img src={landscaping} alt="landscaping Tucson, Arizona lawncare" />
                <p>"Where quality and value mean something"</p>
            </div>
        <TopReviewList />
        </div>      
    );
}

export default Home;