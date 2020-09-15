import grpc from 'grpc';

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());
  
// var processName = process.argv.shift();
// var scriptName = process.argv.shift();
// var command = process.argv.shift();

// if (command == 'list')
//     listBooks();
// else if (command == 'insert')
//     insertBook(process.argv[0], process.argv[1], process.argv[2]);
// else if (command == 'get')
//     getBook(process.argv[0]);
// else if (command == 'delete')
//     deleteBook(process.argv[0]);
// else if (command == 'watch')
//     watchBooks();
function printResponse(error, response) {
  // if (error)
  //   console.log('Error: ', error);
  // else
  //   console.log(response);
}

class Client {
  
  async listBooks() {
    await client.list({}, function(error, books) {
      printResponse(error, books);
    });
  }

  async insertBook(id, title, author) {
    var book = { id: parseInt(id), title: title, author: author };
    await client.insert(book, function(error, empty) {
      printResponse(error, empty);
    });
  }

  async getBook(id) {
    await client.get({ id: parseInt(id) }, function(error, book) {
      printResponse(error, book);
    });
  }

  async deleteBook(id) {
    await client.delete({ id: parseInt(id) }, function(error, empty) {
      printResponse(error, empty);
    });
  }

  async watchBooks() {
      var call = client.watch({});
      await call.on('data', function(book) {
        console.log(book);
      });
  }
}

export default Client;

function start() {
  const client = new Client();

  console.log(process.argv);
  const command = process.argv[2];

  if (command == 'list')
    client.listBooks();
  else if (command == 'insert')
    client.insertBook(process.argv[3], process.argv[4], process.argv[5]);
  else if (command == 'get')
    client.getBook(process.argv[3]);
  else if (command == 'delete')
    client.deleteBook(process.argv[3]);
  else if (command == 'watch')
    client.watchBooks();
}

// start();