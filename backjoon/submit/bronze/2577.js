// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 1;
for (const num of input) {
  count *= num;
}

const result = String(count).split("");
const len = result.length;

const answer = [];
for (let i = 0; i < 10; i++) {
  let times = 0;
  for (let j = 0; j < len; j++) {
    if (result[j] == i) {
      times++;
    }
  }
  console.log(times)
}