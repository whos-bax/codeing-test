// https://school.programmers.co.kr/learn/courses/30/lessons/120913
const example = require('./example/120913');

function solution({my_str, n}) {
    let answer = [];
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        answer.push(my_str.slice(n * i, n * (i + 1)));
    }
    answer = answer.filter((v) => v !== '');
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
