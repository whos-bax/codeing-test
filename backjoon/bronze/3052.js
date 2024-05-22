// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const div42 = input.map((x) => x % 42);
console.log(div42.filter((a, b) => div42.indexOf(a) === b).length);