// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);