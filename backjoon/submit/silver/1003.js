// 실버 3
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const example = input.slice(1);
  for (let i = 0; i < example.length; i++) {
    let oneCount = 0,
      zeroCount = 1;
    for (let j = 1; j <= example[i]; j++) {
      const temp = zeroCount;
  
      zeroCount = oneCount;
      oneCount = temp + oneCount;
    }
    console.log(zeroCount, oneCount);
  }
  