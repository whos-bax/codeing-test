// 브론즈 4
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const [n, ...nums] = input;
  const num = nums[0].split("");
  let sum = 0;
  for (const one of num) {
    sum += Number(one);
  }
  console.log(sum);
  