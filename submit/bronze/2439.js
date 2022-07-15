// 브론즈 4
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  i !== n ?
  console.log(" ".repeat(n - i -1), "*".repeat(i))
  :
  console.log("*".repeat(i))
}
