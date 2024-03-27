import React from "react"; 
import { Link } from "react-router-dom";
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
            <div>
                <h3>Interested in our services? </h3>
                <p>Click <a href="/services">here</a> to learn more!</p>
            </div>
            <div>
                <h3>Want to see some of our work? </h3>
                <p>Click <a href="/gallery">here</a> to view our gallery!</p>
            </div>
            <div>
                <h3>See what some of our customers have said about us!</h3>
                <p>Want to leave a review?</p>
                <Link to="/leaveReview">
                    <button> Click here!</button>
                </Link>
                <TopReviewList />
            </div>
            <h4>Ready to turn your yard from messy to impressy? Lets get started!</h4>
            <Link to="/contact">
                <button>Transform my yard</button>
            </Link>
        </div>      
    );
}

export default Home;