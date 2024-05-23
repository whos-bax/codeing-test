// https://school.programmers.co.kr/learn/courses/30/lessons/12985
const example = require('./example/12985');

function solution({n, a, b}) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        answer++;
        a = a % 2 ? (a + 1) / 2 : a / 2;
        b = b % 2 ? (b + 1) / 2 : b / 2;
        if (a === b) {
            break;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
