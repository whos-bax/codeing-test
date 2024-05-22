// 브론즈 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const [nums, ...quizzes] = input;
  const max = Math.max(...quizzes[0].split(' '))
  const min = Math.min(...quizzes[0].split(' '))

  console.log(min, max)