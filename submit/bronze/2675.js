// 브론즈 2
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, ...words] = input;

let len = words.length;

for (let i = 0; i < len; i++) {
  let arr = [];
  const r = words[i].split(" ")[0];
  const s = words[i].split(" ")[1];
  for (const char of s) {
    arr.push(char.repeat(r))
  }
  console.log(arr.join(""))
}