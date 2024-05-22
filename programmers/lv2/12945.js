// https://school.programmers.co.kr/learn/courses/30/lessons/12945
const example = require('./example/12945');

function solution({n}) {
    let answer = 0;
    let f0 = 0, f1 = 1;

    for (let i = 2; i <= n; i++) {
        answer = (f0 + f1) % 1234567;
        f0 = f1;
        f1 = answer;
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
