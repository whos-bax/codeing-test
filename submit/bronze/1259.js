// 브론즈 1
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

for (const char of input) {
let reverseChar = char.split("").reverse().join("");
console.log(char === reverseChar ? "yes" : "no")
}

