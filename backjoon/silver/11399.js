// 실버 4
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = input[0];
const times = input[1].split(" ");
times.sort((a, b) => a - b);
let count = 0;
for (let i = times.length; i > 0; i--) {
  count += times[times.length - i] * i;
}
console.log(count)
