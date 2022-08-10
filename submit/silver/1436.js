// 실버 5
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

  let num = Number(input);

  let first = 665;
  
  while (num > 0) {
    first++;
  
    if (first.toString().includes("666")) {
      num--;
    }
  }
  
  console.log(first);
