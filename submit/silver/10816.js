// 실버 5
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const m = Number(input[2]);

const origin = input[1].split(" ").map((a) => Number(a));
const compare = input[3].split(" ").map((a) => Number(a));
origin.sort((a, b) => a - b);

let originArr = [[origin[0], 1]];

for (let i = 1; i < n; i++) {
  if (origin[i - 1] === origin[i]) {
    originArr[originArr.length - 1][1]++;
  } else {
    originArr.push([origin[i], 1]);
  }
}

let answer = [];
for (let num of compare) {
  let find = false;
  let start = 0;
  let end = originArr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (num > originArr[mid][0]) {
      start = mid + 1;
    } else if (num < originArr[mid][0]) {
      end = mid - 1;
    } else {
      find = true;
      answer.push(originArr[mid][1]);
      break;
    }
  }
  if (!find) {
    answer.push(0);
  }
}

console.log(answer.join(" "));
