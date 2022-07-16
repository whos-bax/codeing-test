// 브론즈 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

for (const info of input) {
  const each = info.split(" ");
  let [h, w, num] = [...each];

  let yy = num % h;
  if (yy === 0) {
    yy = h;
  }
  let xx = Math.ceil(num / h);

  xx = xx < 10 ? `${0}` + xx : xx;
  const answer = `${yy}` + xx;
  console.log(answer);
}
