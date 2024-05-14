// 실버 4
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let k = Number(input[0].split(" ")[1]);

const values = input
  .map((v) => Number(v))
  .slice(1)
  .sort((a, b) => b - a);

let least = 0;

for (const coin of values) {
  if (k < coin) continue;
  else {
    const value = Math.floor(k / coin);
    k -= value * coin;
    least += value;
  }
}
console.log(least);