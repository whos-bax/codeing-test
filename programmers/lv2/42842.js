// https://school.programmers.co.kr/learn/courses/30/lessons/42842
const example = require('./example/42842');

function solution({brown, yellow}) {
    let answer = [];
    let total = brown + yellow;
    for (let i = 3; i < total; i++) {
        if (total % i === 0) {
            let x = total/i;
            if ((x - 2) * (i - 2) === yellow) {
                answer = [total/i, i];
                break;
            }
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
