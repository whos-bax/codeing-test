// 실버 4
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const answer = [];
for (const ele of input) {
  let count = 0;
  for (const el of ele) {
    if (el === "(" && count >= 0) count++;
    else if (el === ")" && count >= 0) count--;
    else break;
  }

  if (count !== 0) answer.push("NO");
  else answer.push("YES");
}

console.log(answer.join("\n"));
