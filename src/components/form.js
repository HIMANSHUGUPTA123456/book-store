import React from 'react';
import axios from 'axios';
import './form.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const history = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission

    // Fetch form data
    const formData = new FormData(event.target);
    const bookData = {
      name: formData.get('name'),
      author: formData.get('author'),
      description: formData.get('description'),
      price: formData.get('price'),
      available: formData.get('available'),
      image: formData.get('image')
    };

    try {
      // Send a POST request to add book data to the backend
      const response = await axios.post('http://localhost:5000/books', bookData);
      console.log('Book added:', response.data);
      history('/all-books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="fname" name="name" style={{ width: '300px' }} required/><br />
        <label htmlFor="author">Author:</label><br />
        <input type="text" id="lname" name="author" style={{ width: '300px' }} required/><br />
        <label htmlFor="desc">Description:</label><br />
        <input type="text" id="desc" name="description" style={{ width: '300px' }} required/><br />
        <label htmlFor="price">Price:</label><br />
        <input type="number" id="price" name="price" style={{ width: '300px' }} required/><br />
        <label htmlFor="available">Available:</label><br />
        <input type="text" id="available" name="available" style={{ width: '300px' }} required/><br />
        <label htmlFor="image">Image:</label><br />
        <input type="text" id="image" name="image" style={{ width: '300px' }} required/><br />
        <div className='button'>
          <Button variant="contained" type="submit">Add Book</Button>
        </div>
      </form>
    </div>
  );
}
