import axios from "axios";

const baseURL = "http://localhost:3000/book";

class Client {
  async getAllBook() {
    try {
      return await axios.get(`${baseURL}/list`).then((res) => {
        return res.data;
      });
    } catch (e) {
      console.error("Cannot get all book " + e.message);
    }
  }

  async getBookById(bookId) {
    try {
      return await axios.get(`${baseURL}/${bookId}`);
    } catch (e) {
      console.error("Cannot get book " + e.message);
    }
  }

  async insertBook(book) {
    try {
      await axios.post(`${baseURL}/insert`, book);
      return "success";
    } catch (e) {
      console.error("Cannot insert book " + e.message);
    }
  }

  async deleteBook(bookId) {
    try {
      await axios.delete(`${baseURL}/${bookId}`);
      return "success";
    } catch (e) {
      console.error("Cannot delete book " + e.message);
    }
  }
}

export default Client;

async function start() {
  const command = process.argv[2];
  const client = new Client();

  switch (command) {
    case "list":
      console.log(await client.getAllBook());
      break;
    case "book":
      console.log(await client.getBookById(process.argv[3]));
      break;
    case "insert":
      const book = {
        id: parseInt(process.argv[3]),
        title: process.argv[4],
        author: process.argv[5],
      };
      console.log(await client.insertBook(book));
      break;
    case "delete":
      console.log(await client.deleteBook(process.argv[3]));
      break;
    default:
      console.error("wrong command");
  }
}

start();
