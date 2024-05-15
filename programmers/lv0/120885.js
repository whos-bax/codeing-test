// https://school.programmers.co.kr/learn/courses/30/lessons/120885
const example = require('./example/120885');

function solution({bin1, bin2}) {
    let answer = '';
    answer += parseInt(bin1, 2) + parseInt(bin2, 2);

    return Number(answer).toString(2);
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
