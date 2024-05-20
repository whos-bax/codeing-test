// https://school.programmers.co.kr/learn/courses/30/lessons/120871
const example = require('./example/120871');

function solution({n}) {
    let answer = 0;
    for (let i = 1; i < n + 1; i++) {
        answer ++;
        while (answer % 3 === 0 || answer.toString().includes('3')) {
            answer ++;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
