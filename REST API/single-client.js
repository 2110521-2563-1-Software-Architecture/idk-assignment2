import axios from "axios";
import { performance } from "perf_hooks";

const baseURL = "http://localhost:3000/book";

class Client {
  async insertSmall() {
    const t1 = performance.now();
    try {
      let book = {
        id: 13,
        title: "Book13",
        author: "Melvin",
      };
      await axios.post(`${baseURL}/insert`, book);
      const t2 = performance.now();
      console.log("use time = " + (t2 - t1).toString() + " ms.");
      return "success";
    } catch (e) {
      console.error("Cannot insert book " + e.message);
    }
  }

  async insertBig(n) {
    const t1 = performance.now();
    let book = {
      id: 1,
      title: "Book1",
      author: "Melvin",
    };
    for (let i = 0; i < n; i++) {
      try {
        book.id = i;
        book.title = "Book" + i.toString();

        await axios.post(`${baseURL}/insert`, book);
      } catch (e) {
        console.error("Cannot insert book " + e.message);
      }
    }
    const t2 = performance.now();
    console.log("use time = " + (t2 - t1).toString() + " ms.");
    return "success";
  }
}

async function start() {
  const command = process.argv[2];
  const client = new Client();

  switch (command) {
    case "small":
      console.log(await client.insertSmall());
      break;
    case "big":
      console.log(await client.insertBig(process.argv[3]));
      break;
    default:
      console.error("wrong command");
  }
}

start();
