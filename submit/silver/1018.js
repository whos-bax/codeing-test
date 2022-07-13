// 실버 4
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const n = Number(input[0]);
const m = Number(input[1]);
const chess = input.slice(2);
const line = ["WBWBWBWB", "BWBWBWBW"];

const answer = [];

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    for (let z = 0; z < 2; z++) {
      let count = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = chess[i + x][j + y];
          if (current !== line[(x + z) % 2][y]) count++;
        }
      }
      answer.push(count);
    }
  }
}
console.log(Math.min(...answer));
