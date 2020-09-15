import Client from './client.js'
import { performance } from 'perf_hooks'

async function start() {
    let t1 = performance.now();
    let n = process.argv[2] | 1;
    
    for( let i=0; i<n; i++) {
        const client = new Client();
        const a = (i+1)%3;
        switch(a) {
            case 1 :
                const book = {
                    "id": a,
                    "title": "Book" + a.toString(),
                    "author": "Kritsana",
                };
                await client.insertBook(book.id, book.title, book.author);
                break;
            case 2 :
                await client.getBook((a-1).toString());
                break;
            case 0 :
                await client.deleteBook((a+1).toString())
                break;
        }
    }
    let t2 = performance.now();
    console.log("use time = " + (t2 - t1).toString() + " ms.");
}

start();