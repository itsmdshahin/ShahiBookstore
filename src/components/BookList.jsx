// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/BookList.scss';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get('http://localhost:5000/api/allbooks')
      .then(response => {
        const booksWithImages = response.data.map(book => {
          return {
            ...book,
            imageUrl: book.imageUrl || 'https://picsum.photos/370/350', // Default dummy image URL
          };
        });
        setBooks(booksWithImages);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletebook/${bookId}`);
      fetchBooks(); // Refresh the book list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <div className="card-list">
        {books.map(book => (
          <div className="card" key={book._id}>
            <Link to={`/${book._id}`}>
              <div className="img-container">
                <img src={book.imageUrl} alt={`${book.title} Cover`} />
              </div>
              <h3 className='maintitle'>{book.title}</h3>
            </Link>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <div className="button-container">
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <Link to={`/${book._id}`}>
                <button>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
