// 브론즈 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const cost = input[0];
const rests = [500, 100, 50, 10, 5, 1];
let count = 0;

let n = 1000 - cost;

for (const rest of rests) {
  if (n >= rest) {
    while (n !== 0) {
      if (n < rest) break;
      n = n - rest;
      count++;
    }
  }
}

console.log(count);
