// 실버 5
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const scores = input[1].split(" ");
const newScores = [];
const max = Math.max(...scores);
for (const score of scores) {
  newScores.push((score / max) * 100);
}

let sum = 0;
for (const newScore of newScores) {
  sum += newScore;
}
console.log(sum / n);