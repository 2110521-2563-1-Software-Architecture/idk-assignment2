// var grpc = require('grpc');
// var performance = require('perf_hooks');
import { performance } from 'perf_hooks';
import grpc from 'grpc';

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());
  
var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == 'list')
    listBooks();
else if (command == 'insertSmall')
    insertSmall();
else if (command == 'insertBig')
    insertBig(process.argv[0]);

function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log(response);
}

function listBooks() {
    client.list({}, function(error, books) {
        printResponse(error, books);
    });
}

function insertSmall() {
    var book = {id: 1, title: "Book1", author: "Kritsana"};
    client.insert(book, function(error, empty) {
        printResponse(error, empty);
    });
}

function insertBig(n) {
    const t1 = performance.now();
    var book = { id: 1, title: "Book1", author: "Kritsana" };
    for (let i = 0; i < n; i++) {
        try{
            book.id = i;
            book.title = "Book";
            client.insert(book, function(error, empty) {
                printResponse(error, empty);
            });
        } catch (e) {
            console.error("Cannot insert book" + e.message);
        }
    }
    const t2 = performance.now()
    console.log('TEST')
    console.log("use time = " + (t2-t1).toString() + "ms.");
}