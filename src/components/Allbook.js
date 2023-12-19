import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Allbook.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/books");
        console.log(response);
        setBooks(response.data.books); // Assuming 'books' is the array received from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (index) => {
    try {
      let name = books[index].name;
      await axios.delete(`http://localhost:5000/books/${name}`);
      const updatedBookList = books.filter((_, i) => i !== index);
      setBooks(updatedBookList);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="books">
      {books.map((book, index) => (
        <div className="card">
          <div
            className="image"
            style={{ backgroundImage: `url(${book.image})` }}
          ></div>
          <div className="title">
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
          </div>
          <p>Description: {book.description}</p>
          <div className="but">
            <div className="sep">
              <p>Avaialble: {book.available ? "Yes" : "No"}</p>
              <h3>Price: {book.price}</h3>
            </div>
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                marginTop: "3px",
              }}
              key={index}
              onClick={() => handleDelete(index)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
