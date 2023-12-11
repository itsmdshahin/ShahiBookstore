// src/components/BookDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/styles/BookDetail.scss';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = () => {
    axios.get(`https://shahi-bookstore.vercel.app/api/allbooks/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  };

  return (
    <div className="book-detail">
      <div className="book-image">
        <img src={book.imageUrl || 'https://picsum.photos/500/300?grayscale'} alt={`${book.title} Cover`} />
      </div>
      <div className="book-info">
        <h2 className='maintitle'>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <p className="description">{book.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
      </div>
    </div>
  );
};

export default BookDetail;
