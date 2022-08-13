// 브론즈 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((v) => Number(v));
const cards = input[1].split(" ").map((v) => Number(v));

let answer = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let count = cards[i] + cards[j] + cards[k];
      if (count > answer && count <= m) {
        answer = count;
      }
    }
  }
}
console.log(answer);
