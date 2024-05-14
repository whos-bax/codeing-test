// https://school.programmers.co.kr/learn/courses/30/lessons/120894
const example = require('./example/120894');

function solution (numbers) {
    let answer = 0;
    console.log(numbers)
    return answer;
}

for (let i = 0; i < example.len; i++) {
    console.log(solution(example.numbers[i]) === example.result[i]);
}
