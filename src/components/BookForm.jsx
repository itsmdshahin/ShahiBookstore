// src/components/BookForm.js
import '../assets/styles/bookFrom.scss';
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  
  const apiURL =  'http://localhost:5000' || 'https://shahibookstore.onrender.com';
   const userid = localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    UserId:`${userid}`,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${apiURL}/api/addabook`, formData)
      .then(response => {
        console.log('Book added successfully:', response.data);
        alert('Sucessfully Add a Book');
        // Redirect to the book list or show a success message
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div className="bookformdiv">
      <h2 className="bookformdtitle">Add New Book</h2>
      <form className="bookforms" onSubmit={handleSubmit}>
        <label>Title : 
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </label>
        <label>Genre:
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
        </label>
        <label>Publication Date:
          <input type="text" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
