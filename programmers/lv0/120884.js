// https://school.programmers.co.kr/learn/courses/30/lessons/120884
const example = require('./example/120884');

function solution({chicken}) {
    let answer = 0;
    while (chicken >= 10) {
        let service = Math.floor(chicken / 10);
        answer += service;
        chicken = chicken - service * 10 + service;
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
