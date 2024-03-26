import React from 'react';
import ReactStars from 'react-stars';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

const NewReview = () => {
    const [review, setReview] = useState({
        reviewText: '',
        reviewAuthor: '',
        rating: 0
    });
    const [addReview, { error }] = useMutation(ADD_REVIEW);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setReview({
            ...review,
            rating: newRating
        });
        // You can handle the rating change here, e.g., update state, send to server, etc.
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(review);
        console.log(review.rating)
        try {
            const { data } = await addReview({
                variables: {
                    reviewText: review.reviewText,
                    reviewAuthor: review.reviewAuthor,
                    rating: parseInt(review.rating)
                }
            });
            console.log("Review added successfully!", data);
            window.alert("Review added successfully! Thank you!");
            setReview({
                reviewText: '',
                reviewAuthor: '',
                rating: 0
            });
        }
        catch (error) {
            console.error(error);
            window.alert("Please enter a rating and ensure all fields are filled out before submitting.");
        };
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({
            ...review,
            [name]: name === 'rating' ? parseInt(value) : value
        });
    }

    return (
        <div>
            {/* <h1>Rate this:</h1> */}
            <form onSubmit={handleFormSubmit} className="form-group">
                <ReactStars
                    name="rating" // Name of the form field
                    count={5} // Number of stars to display
                    onChange={ratingChanged} // Callback function when the rating changes
                    size={24} // Size of the stars
                    color1={'#f00'} // Color of inactive stars
                    color2={'#ffd700'} // Color of active stars
                    value={review.rating} // Initial rating value
                />
                Your Name:
                <input 
                    type="text"
                    name="reviewAuthor"
                    placeholder="Your name"
                    value={review.reviewAuthor} 
                    onChange={handleChange}
                />
                Your Review:
                <textarea 
                    name="reviewText"
                    placeholder="Please leave your review here"
                    value={review.reviewText} 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewReview;
