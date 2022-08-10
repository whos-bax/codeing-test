// 브론즈 1
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let first = Number(input[0]);
let second = Number(input[1]);

// 유클리드 호제법
while (first % second !== 0) {
  let gcd = first % second;
  if (gcd != 0) {
    first = second;
    second = gcd;
  }
}

console.log(second);
console.log((Number(input[0]) * Number(input[1])) / second);
