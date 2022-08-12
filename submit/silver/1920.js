// 실버 4

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const origin = input[1].split(" ").map((a) => Number(a));
const compare = input[3].split(" ").map((a) => Number(a));
origin.sort((a, b) => a - b);

const answer = [];

for (const num of compare) {
  let first = 0;
  let last = origin.length - 1;
  let find = false;

  while (first <= last) {
    let center = Math.floor((first + last) / 2);

    if (num > origin[center]) {
      first = center + 1;
    } else if (num < origin[center]) {
      last = center - 1;
    } else {
      find = true;
      break;
    }
  }
  if (find) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join("\n"));
