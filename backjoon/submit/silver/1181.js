// 실버 3
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, ...words] = input;

words = words.filter((a, b) => words.indexOf(a) === b);
words.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a.length == b.length) {
    if (a > b) return 1;
    if (a < b) return -1;
    else return 0;
  }
});
for (const word of words) {
  console.log(word);
}
