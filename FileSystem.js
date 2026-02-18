import fs from 'fs';

// fs.writeFileSync('trial.pdf' , 'this is dummy text')
// fs.writeFileSync('trial.js' , 'console.log("hello")');


let ans = fs.readFileSync('trial.pdf', 'utf-8')
console.log(ans);
