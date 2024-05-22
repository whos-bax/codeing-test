// 브론즈 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const ogHour = Number(input[0]);
const ogMin = Number(input[1]);

const standard = ogMin - 45;
let newHour = standard >= 0 ? ogHour : ogHour - 1;
let newMin = standard >= 0 ? standard : standard + 60;
if (newHour === -1) {
  newHour = 23;
}

console.log(newHour, newMin);
