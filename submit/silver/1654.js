// 실버 2
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [k, n] = input.shift().split(" ");

let answer = 0;
let start = 0;
let end = 10e9;

function Count(mid) {
  let result = 0;
  for (const a of input) {
    result += Math.floor(Number(a) / mid);
  }
  return result;
}

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (Count(mid) < n) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
