const Book = require("../model/Book");
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  } else {
    return res.status(200).json({ books });
  }
};

const addBook = async (req, res, next) => {
  let book;
  const { name, author, description, price, available, image } = req.body;
  try {
    book = new Book({
      name: name,
      author: author,
      description: description,
      price: price,
      available: available,
      image: image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  } else {
    console.log("Book Successfully added");
    return res.status(201).json({book});
  }
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No book found" });
    } else {
      return res.status(200).json({ book });
    }
  };

  const updateBook = async (req, res, next) => {
    const { stored, name, author, description, price, available, image } = req.body;
    try {
      // Find the document by name to get its ID
      const existingBook = await Book.findOne({ name: stored });
  
      if (!existingBook) {
        return res.status(404).json({ message: "No document found with the specified name" });
      }
  
      // Update the book using its ID
      const updatedBook = await Book.findByIdAndUpdate(existingBook._id, {
        name,
        author,
        description,
        price,
        available,
        image
      });
  
      if (!updatedBook) {
        return res.status(404).json({ message: "Unable to update by this ID" });
      }
  
      return res.status(200).json({ book: updatedBook });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

  const deleteBook = async (req, res, next) => {
    const name = req.params.name;
    let book;
    try {
      book = await Book.deleteOne({name : name});
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable to delete book by this ID" });
    } else {
      return res.status(200).json( {message: "Book successfully Deleted"});
    }
  };

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;

