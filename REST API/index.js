import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

const app = express();
const PORT = 3000;

import Book from "./Book.js";
const bookData = new Book();

app.use(bodyParser.json());

app.get("/book/list", (req, res) => {
  let books = bookData.getBookList();
  res.json({ books });
});

app.get("/book/:bookId", (req, res) => {
  let book = bookData.getBookById(req.params.bookId);
  res.json({ book });
});

app.post("/book/insert", (req, res) => {
  bookData.insertBook(req.body);
  res.send();
});

app.delete("/book/:bookId", (req, res) => {
  bookData.deleteBookById(req.params.bookId);
  res.send();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
