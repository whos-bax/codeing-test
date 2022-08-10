// 실버 3
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const origin = input.map((v) => Number(v));
const answer = [];
function solution(n, nums) {
  const stack = [];
  let count = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums.shift();
    while (count <= num) {
      stack.push(count);
      count++;
      answer.push("+");
    }

    const popValue = stack.pop();
    if (popValue !== num) {
      return "NO";
    }
    answer.push("-");
  }
  return answer.join("\n");
}

console.log(solution(n, origin));
