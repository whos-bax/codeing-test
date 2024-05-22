// https://school.programmers.co.kr/learn/courses/30/lessons/120924
const example = require('./example/120924');

function solution({common}) {
    let answer = 0;
    let diff = 0;
    if (common[2] - common[1] === common[1] - common[0]) {
        diff = common[2] - common[1];
        answer = common.at(-1) + diff;
    }
    if (common[2] / common[1] === common[1] / common[0]) {
        diff = common[2] / common[1];
        answer = common.at(-1) * diff;
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
