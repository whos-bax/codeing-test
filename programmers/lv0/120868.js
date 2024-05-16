// https://school.programmers.co.kr/learn/courses/30/lessons/120868
const example = require('./example/120868');

function solution({sides}) {
    let answer = 0;
    const [a, b] = sides;
    for (let i = Math.abs(a - b) + 1; i < Math.abs(a + b); i++) {
        answer ++
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
