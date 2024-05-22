// https://school.programmers.co.kr/learn/courses/30/lessons/68644
const example = require('./example/68644');

function solution({numbers}) {
    let answer = [];
    numbers.map((number, i) => {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(number + numbers[j]);
        }
    })
    answer = [...new Set(answer)].sort((a, b) => a - b);
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
