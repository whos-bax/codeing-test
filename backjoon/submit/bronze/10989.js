// 브론즈 1
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(
  input.slice(1).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
  }).join("\n")
);