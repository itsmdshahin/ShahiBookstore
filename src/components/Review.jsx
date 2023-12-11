// src/components/Review.js
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Review.scss';

const Review = ({ author, content }) => (
  <div className="review">
    <p className="review-content">{content}</p>
    <p className="review-author">- {author}</p>
  </div>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Review;
