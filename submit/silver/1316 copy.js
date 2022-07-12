// 실버 4
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const string = input;
let count = 0;
let isGroup = true;

for (let i = 1; i <= input[0]; i++) {
  let arr = [];
  for (const char of input[i]) {
    if (arr.length < 2) {
      arr.push(char);
      isGroup = true;
    } else if (arr.includes(char) && arr[arr.length - 1] !== char) {
      isGroup = false;
      break;
    } else {
      arr.push(char);
      isGroup = true;
    }
  }
  if (isGroup) {
    count++;
  }
}
console.log(count);
