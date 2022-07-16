// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
// .split("\n");

const questNum = Number(input);
const beforeArr = [];

function beforeSum(originNum) {
  const eachNum = String(originNum).split("");
  let numSum = 0;
  for (num of eachNum) {
    numSum += Number(num);
  }
  const constructor = originNum + numSum;
  return constructor;
}

for (let i = 0; i < questNum; i++) {
  if (beforeSum(i) === questNum) {
    beforeArr.push(i);
  }
}

if (beforeArr.length) {
  console.log(Math.min(...beforeArr));
} else console.log(0);
