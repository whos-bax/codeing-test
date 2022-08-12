// 실버 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const n = Number(input[0]);
const m = Number(input[1]);

let arr = new Array(m + 1).fill(true).map((a, b) => b);
arr[0] = arr[1] = false;

for (let i = 2; i * i < m + 1; i++) {
  if (!arr[i]) continue;
  if (arr[i]) {
    for (let j = i * i; j < m + 1; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 0; i < m + 1; i++) {
  if (i < n) arr[i] = false;
  else if (arr[i]) console.log(i);
}
