// https://school.programmers.co.kr/learn/courses/30/lessons/12901
const example = require('./example/12901');

function solution({a, b}) {
    let answer = '';
    answer = new Date(`2016-${a}-${b}`).toString().split(" ")[0]
    return answer.toUpperCase();
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
