import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/styles/myBooks.scss';

const MyBooks = ({ userId, token }) => {

    const apiURL = 'http://localhost:5000' || 'https://shahibookstore.onrender.com';
    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
        console.log("This is : " + localStorage.getItem('userId'));
        const fetchUserBooks = async () => {
            try {
                const response = await axios.get(
                    `${apiURL}/api/books/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    const { bookCount } = response.data;
                    setUserBooks(bookCount);
                } else {
                    console.error('Error fetching user books:', response.status);
                }
            } catch (error) {
                console.error('Error during data fetch:', error);
            }
        };

        fetchUserBooks();
    }, [token, userId]);

    const handleDelete = async (bookId) => {
        try {
            await axios.delete(`${apiURL}/api/deletebook/${bookId}`);
            fetchUserBooks(); // Refresh the book list after deletion
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleUpdate = async (bookId) => {
        // Implement your update logic here
        // For simplicity, you can use a prompt to get new values
        const newTitle = prompt('Enter the new title:');
        const newAuthor = prompt('Enter the new author:');

        try {
            await axios.put(
                `${apiURL}/api/updatebook/${bookId}`,
                {
                    title: newTitle === null ? title : newTitle,
                    author: newAuthor === null ? author : newAuthor,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchUserBooks(); // Refresh the book list after update
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };



    return (
        <div className="mybook">
            <h2>My Books</h2>
            {userBooks.length === 0 && <p>No books found.</p>}
            {userBooks.map((book) => (
                <div className="card" key={book._id}>
                    <h3>Book Name: {book.title}</h3>
                    <h4>Author: {book.author}</h4>
                    <h4>Genre: {book.genre}</h4>
                    <h4>Publication: {book.publicationDate}</h4>
                    <div className="button-container">
                        <button onClick={() => handleDelete(book._id)}>Delete</button>
                        {/* Add your update button and link to the update route */}
                        <button onClick={() => handleUpdate(book._id)}>Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBooks;
