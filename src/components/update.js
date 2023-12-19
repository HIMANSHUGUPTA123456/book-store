import React from 'react'
import axios from 'axios';
import './form.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const history = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission

    // Fetch form data
    const formData = new FormData(event.target);
    const bookData = {
      stored: formData.get('prev'),
      name: formData.get('name'),
      author: formData.get('author'),
      description: formData.get('description'),
      price: formData.get('price'),
      available: formData.get('available'),
      image: formData.get('image')
    };

    try {
      // Send a POST request to add book data to the backend
      const response = await axios.put('http://localhost:5000/books', bookData);
      console.log('Book updated:', response.data);
      history('/all-books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Already present name:</label><br />
        <input type="text" id="already" name="prev" style={{ width: '300px' }} required/><br />
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
          <Button variant="contained" type="submit">Update Book</Button>
        </div>
      </form>
    </div>
  )
}
