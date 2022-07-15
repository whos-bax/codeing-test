// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, m] = input;
const nReverse = n.split('').reverse().join("");
const mReverse = m.split('').reverse().join("");

const answer = nReverse > mReverse ? nReverse : mReverse;
console.log(answer)
