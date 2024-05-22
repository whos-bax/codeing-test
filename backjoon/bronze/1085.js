// 브론즈 3
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var x = parseInt(input[0]);
var y = parseInt(input[1]);
var w = parseInt(input[2]);
var h = parseInt(input[3]);

if (x - 0 <= w - x) {
  var minX = x - 0;
} else {
  var minX = w - x;
}
if (y - 0 <= h - y) {
  var minY = y - 0;
} else {
  var minY = h - y;
}
if (minX < minY) {
  var answer = minX;
} else var answer = minY;
console.log(answer);