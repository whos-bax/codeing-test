// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const strAsc = Array(8)
  .fill()
  .map((a, b) => b + 1)
  .join(" ");

const strDsc = Array(8)
  .fill()
  .map((a, b) => b + 1)
  .sort((a, b) => b - a)
  .join(" ");

if (input === strAsc) console.log("ascending")
else if (input === strDsc) console.log("descending")
else console.log("mixed")
