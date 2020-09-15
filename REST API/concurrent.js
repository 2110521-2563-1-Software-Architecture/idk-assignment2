import Client from './client.js';
import { performance } from 'perf_hooks';



async function c1(t1) {

    let client = new Client();
    // call


    // call
    // for(let i=0; i<n; i++) {
    //     let client = new Client();
    let book = {
        "id": 0,
        "title": "Book C1" ,
        "author": "Melvin",
    };
    await client.insertBook(book);
    //     await client.getBookById(i);
    //     await client.deleteBook(i);
    // }
    check(t1);
}

// async function c2(n, t1) {
//     for(let i=0; i<n; i++) {
//         // console.log(i);
//         let client = new Client();
//         let book = {
//             "id": i,
//             "title": "Book C2" + i.toString(),
//             "author": "Melvin",
//         };
//         await client.insertBook(book);
//         await client.getBookById(i);
//         await client.deleteBook(i);
//     }
//     check(t1);
// }

function check(t1) {
    const t2 = performance.now();
    console.log("use time = " + (t2 - t1).toString() + " ms."); 
    
}

async function start() {
    let t1 = performance.now();
    let n = process.argv[2] | 1;
    for(let i=0; i<n; i++){
        c1(t1);
    }
    // c2(n,t1);
    // check(t1);
    // let t2 = performance.now();
    // console.log("use time = " + (t2 - t1).toString() + " ms."); 
}

start();