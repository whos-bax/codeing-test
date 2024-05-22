// https://school.programmers.co.kr/learn/courses/30/lessons/12911
const example = require('./example/12911');

function solution({n}) {
    let answer = n;
    let len = [...n.toString(2)].filter(v => v === '1').length;
    while (true) {
        answer ++;
        if([...answer.toString(2)].filter(v => v === '1').length === len) {
            break;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
