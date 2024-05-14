// 브론즈 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();
const triangle = input;
for (const tri of triangle) {
  const triArr = tri.split(" ").sort((a, b) => b - a);
  const [a, b, c] = [...triArr];

  const right = a ** 2 == b ** 2 + c ** 2;
  if (right) {
    console.log("right");
  } else console.log("wrong");
}
