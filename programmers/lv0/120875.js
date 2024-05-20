// https://school.programmers.co.kr/learn/courses/30/lessons/120875
const example = require('./example/120875');

function solution({dots}) {
    let answer = 0;
    let mainDot = dots.splice(0, 1)[0];
    for (let i = 0; i < 3; i++) {
        let main = (dots[i][1] - mainDot[1]) / (dots[i][0] - mainDot[0]);
        let compare =
            (dots[(i + 1) % 3][1] - dots[(i + 2) % 3][1]) / (dots[(i + 1) % 3][0] - dots[(i + 2) % 3][0]);

        if (main === compare) {
            answer = 1;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
