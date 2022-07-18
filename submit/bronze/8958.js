// 브론즈 2
<<<<<<< HEAD
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
=======
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const strAsc = Array(8)
  .fill()
  .map((a, b) => b + 1)
  .join(" ");

const strDsc = Array(8)
  .fill()
  .map((a, b) => b + 1)
  .sort((a, b) => b - a)
  .join(" ");

if (input === strAsc) console.log("ascending")
else if (input === strDsc) console.log("descending")
else console.log("mixed")
>>>>>>> origin/formac
