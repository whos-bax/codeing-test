// https://school.programmers.co.kr/learn/courses/30/lessons/81301
const example = require('./example/81301');

function solution({s}) {
    let answer = 0;
    let numList = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]
    numList.forEach((v, i) => {
        s = s.replaceAll(v, i)
    })
    answer = Number(s);
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
