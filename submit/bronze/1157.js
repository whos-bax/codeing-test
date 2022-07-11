// 브론즈 1
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

// 처음부터 대문자로 값 입력받기
var x = input[0].toUpperCase().split("");

// 단어의 각 알파벳을 아스키코드를 이용해 A=0, Z=25의 인덱스 취급
const answer = new Array(26).fill(0);
for (let i = 0; i < x.length; i++) {
  answer[x[i].charCodeAt(0) - 65] += 1;
}

const max = Math.max(...answer);
const result = answer.filter(value => value === max).length === 1
? String.fromCharCode(answer.findIndex(val => val === max) + 65) : '?' ;

console.log(result);