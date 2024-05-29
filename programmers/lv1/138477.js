// https://school.programmers.co.kr/learn/courses/30/lessons/138477
const example = require('./example/138477');

function solution({k, score}) {
    let answer = [];
    let list = [];
    for (let i = 0; i < score.length; i++) {
        if (list.length < k) {
            list.push(score[i]);
            list.sort((a, b) => b - a);
            answer.push(list.at(-1));
        } else {
            list.push(score[i]);
            list.sort((a, b) => b - a);
            answer.push(list[k - 1]);
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
