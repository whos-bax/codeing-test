// https://school.programmers.co.kr/learn/courses/30/lessons/120885
const example = require('./example/120885');

function solution({bin1, bin2}) {
    let answer = '0';
    console.log(bin1, bin2)
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
