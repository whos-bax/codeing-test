// 브론즈 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [nums, ...quizzes] = input;

for (const quiz of quizzes) {
  let len = quiz.length;
  let answer = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (quiz[i] === "O") {
      count++;
      if (quiz[i + 1] === "X" || quiz[i + 1] === undefined) {
        // console.log(count)
        for (let j = 0; j < count; j++) {
          answer += j + 1;
        }
      }
    } else count = 0;
  }
  console.log(answer);
}
