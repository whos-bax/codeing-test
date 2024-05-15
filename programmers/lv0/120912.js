// https://school.programmers.co.kr/learn/courses/30/lessons/120912
const example = require('./example/120912');

function solution(array) {
    let answer = 0;
    array.forEach((v) => {
        answer += [...v.toString()].filter(n => n === '7').length
    })
    return answer;
}

for (let i = 0; i < example.len; i++) {
    console.log(solution(example.array[i]) === example.result[i]);
}
