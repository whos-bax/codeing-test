// 실버 3
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = input;
nums.sort((a, b) => a - b);

// 산술 평균
let sum = 0;
for (const num of nums) {
  sum += Number(num);
}
const average = Math.round(sum / n);
console.log(average == -0 ? 0 : average);

// 중앙값
const mid = nums[Math.floor(n / 2)];
console.log(mid);

// 최빈값
let map = {};
let arr = [];
let mostValue = 0;

for (const num of nums) {
  if (map[num]) map[num] = map[num] + 1;
  else map[num] = 1;
}

const most = Math.max(...Object.values(map));
for (const key in map) {
  if (map[key] === most) arr.push(key);
}
if (arr.length > 1) {
  arr = arr.sort((a, b) => a - b);
  mostValue = arr[1];
} else mostValue = arr[0];
console.log(mostValue);

// 범위
const max = Math.max(...nums);
const min = Math.min(...nums);
console.log(max - min);
