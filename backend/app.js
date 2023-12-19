const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb+srv://admin:Himanshu@cluster0.y4dpkk9.mongodb.net/").then(()=>console.log("Connected to a database"))
.then(()=>app.listen(5000)).catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/books",router);