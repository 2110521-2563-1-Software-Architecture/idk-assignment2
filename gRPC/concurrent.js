import Client from './client.js';
import { performance } from 'perf_hooks';

async function c1(t1) {
    let client = new Client();
    let n = (Math.floor(Math.random()*10))%3;
    let book = {
        "id": 0,
        "title": "Book C1",
        "author": "BKK",
    };
    switch(n) {
        case 0 :
            await client.insertBook(book);
            break;
        case 1 :
            await client.getBook("0");
            break;
        case 2 :
            await client.deleteBook("0");
            break;
    }
    check(t1);
}

function check(t1) {
    const t2 = performance.now();
    console.log("use time = ", (t2 - t1).toString() + " ms.");
}

async function start() {
    let t1 = performance.now();
    let n = process.argv[2] | 1;
    for(let i=0; i<n; i++){
        c1(t1);
    }
}

start();