// 브론즈 1

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

var x = parseInt(input[0]);

if (x > 9) {
  var left = (x - (x % 10)) / 10;
  var right = x % 10;
} else {
  var left = 0;
  var right = x % 10;
}

var count = 0;
while (1) {
  var answer = left + right;
  
  left = right;
  right = answer % 10;
  count++;
  var newNum = left * 10 + right;
  if (newNum === x) {
    break;
  }
}
console.log(count);