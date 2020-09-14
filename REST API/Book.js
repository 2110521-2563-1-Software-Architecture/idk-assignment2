export default class Book {
    
    books = [];

    constructor() {
        this.books = [
            {
              "id": 123,
              "title": "A Tale of Two Cities",
              "author": "Charles Dickens"
            },
            {
              "id": 2,
              "title": "The Three Musketeers",
              "author": "Alexandre Dumas"
            }
          ];
    }

    getBookList() {
        return this.books;
    }
    
    getBookById(bookId) {
        let book = this.books.filter((book) => {
            return book.id.toString() === bookId.toString();
        });

        if (book.length > 0) {
            return book[0];
        }

        return {};
    }

    insertBook(book) {
        this.books.push(book);
    }

    deleteBookById(bookId) {
        this.books = this.books.filter((book) => {
            return book.id.toString() !== bookId.toString();
        })
    }





}