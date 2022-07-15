// 브론즈 5
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let sum = 0;

for (const num of input) {
  sum += Number(num) ** 2;
}
console.log(sum % 10);
