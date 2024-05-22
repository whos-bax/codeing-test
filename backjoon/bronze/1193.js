// 브론즈 1
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const n = input[0];

let line = 0;
let end = 0; // 1,3,6,10,15

while (n > end) {
  line++;
  end += line;
}

const diff = end - n;

let top = 0;
let bottom = 0;
if (line % 2 == 0) {
  top = line - diff;
  bottom = diff + 1;
} else {
  top = diff + 1;
  bottom = line - diff;
}

console.log(top + "/" + bottom);