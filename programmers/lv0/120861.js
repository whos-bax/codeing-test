// https://school.programmers.co.kr/learn/courses/30/lessons/120861
const example = require('./example/120861');

function solution({keyinput, board}) {
    let answer = [0, 0];
    let [w, h] = board.map(v => (v - 1) / 2);

    keyinput.map(v => {
        if (v === 'left') {
            if (Math.abs(answer[0]) < w || answer[0] === w) {
                answer[0] -= 1;
            }
        } else if (v === 'right') {
            if (Math.abs(answer[0]) < w || answer[0] === -w) {
                answer[0] += 1;
            }
        } else if (v === 'up') {
            if (Math.abs(answer[1]) < h || answer[1] === -h) {
                answer[1] += 1;
            }
        } else {
            if (Math.abs(answer[1]) < h || answer[1] === h) {
                answer[1] -= 1;
            }
        }
    })

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
