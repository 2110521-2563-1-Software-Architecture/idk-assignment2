import Client from './client.js';
import { performance } from 'perf_hooks';

async function start() {
    let t1 = performance.now();
    let n = process.argv[2] | 1;
    for(let i=0; i<n; i++) {
        let client = new Client();
        let book = {
            "id": i,
            "title": "Book" + i.toString(),
            "author": "Melvin",
        };
        await client.insertBook(book);
        await client.getBookById(i);
        await client.deleteBook(i);
    }
    let t2 = performance.now();
    console.log("use time = " + (t2 - t1).toString() + " ms.");
}

start();