// https://school.programmers.co.kr/learn/courses/30/lessons/120860
const example = require('./example/120860');

function solution({dots}) {
    let answer = 0;
    dots.sort((a, b) => a[0] - b[0]);
    let x = Math.abs(dots.filter((v) => v[0] === dots[0][0]).reduce((a, b) => -a + b[1], 0));
    let y = Math.abs(dots.filter((v) => v[1] === dots[0][1]).reduce((a, b) => -a + b[0], 0));

    answer = x * y;

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
