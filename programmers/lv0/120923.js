// https://school.programmers.co.kr/learn/courses/30/lessons/120923
const example = require('./example/120923');

function solution({num, total}) {
    let answer = [];
    let x = 0;

    for (let i = 0; i < num; i++) {
        total -= i;
    }
    x = total / num;

    for (let i = 0; i < num; i++) {
        answer.push(x + i);
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
