// 브론즈 3
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let answer = "";

for (let i = n; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer);
