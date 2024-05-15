// https://school.programmers.co.kr/learn/courses/30/lessons/120885
const example = require('./example/120885');

function solution(input) {
    let answer = '0';
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution({...example.input}) === example.result[i]);
}
