import React from 'react';
import ReactStars from 'react-stars';

const ReviewRate = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    // You can handle the rating change here, e.g., update state, send to server, etc.
  };

  return (
    <div>
      <h1>Rate this:</h1>
      <ReactStars
        count={5} // Number of stars to display
        onChange={ratingChanged} // Callback function when the rating changes
        size={24} // Size of the stars
        color1={'#f00'} // Color of inactive stars
        color2={'#ffd700'} // Color of active stars
        value={0} // Initial rating value
      />
    </div>
  );
};

export default ReviewRate;
