// src/pages/Home.jsx
import React from 'react';
import Review from '../components/Review';
import Footer from '../components/Footer';
import '../assets/styles/home.scss';
import BookList from '../components/BookList';

const Index = () => (
    <div className="home">
        <div className="welcome-section">
            {/* Use a background image for the welcome section */}
            <div className="welcome-bg"></div>
            <h1>Welcome to Shahi Bookstore</h1>
        </div>

        {/* Display Book List or Other Content Here */}
        <BookList />
        <section className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-container">
                {/* Add additional Review components here for a slide view */}
                <Review author="John Doe" content="Great selection of books! I love this store." />
                <Review author="Jane Smith" content="Excellent customer service and fast delivery." />
                <Review author="Tom Dine" content="To make service and fast delivery." />
                {/* Add more reviews as needed */}
            </div>
        </section>

    </div>
);

export default Index;
