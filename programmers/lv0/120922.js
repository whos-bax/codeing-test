// https://school.programmers.co.kr/learn/courses/30/lessons/120922
const example = require('./example/120922');

function solution({M, N}) {
    let answer = 0;
    answer = (M - 1) + (N - 1) * M;
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
