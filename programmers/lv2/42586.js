// https://school.programmers.co.kr/learn/courses/30/lessons/42586
const example = require('./example/42586');

function solution({progresses, speeds}) {
    var answer = [];
    let idx = 0;
    while (progresses.length > 0) {
        let left = Math.ceil((100 - progresses[idx])/speeds[idx]);
        progresses = progresses.map((v, i) => {
            return v + speeds[i] * left;
        })
        idx = progresses.findIndex(v => v < 100);
        if (idx === -1) {
            answer.push(progresses.length);
            progresses = [];
        } else {
            progresses = progresses.slice(idx);
            speeds = speeds.slice(idx);
            answer.push(idx);
            idx = 0;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
