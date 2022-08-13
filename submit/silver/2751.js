// 실버 5
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = input;
nums.sort((a, b) => a - b);
console.log(nums.join("\n"));
