// 실버 5
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = input[1].split(" ").map((v) => Number(v));
let answer = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 2) continue;
  else {
    let count = 0;
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) count++;
    }
    if (count === 0) {
      answer++;
    }
  }
}
console.log(answer);
