// 브론즈 3
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const max = Math.max(...input);
console.log(max);
console.log(input.indexOf(`${max}`) + 1);
