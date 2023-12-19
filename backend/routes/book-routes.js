const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");

router.get("/",booksController.getAllBooks)
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/",booksController.updateBook);
router.delete("/:name",booksController.deleteBook);
module.exports = router;