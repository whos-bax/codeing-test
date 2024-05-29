// https://school.programmers.co.kr/learn/courses/30/lessons/12981
const example = require('./example/12981');

function solution({n, words}) {
    var answer = [0, 0];
    let count = 0;
    let arr = Array(n).fill(0);
    for (let i = 0; i < words.length; i++) {
        arr[i%n] ++;
        if (i%n === 0) {
            count ++;
        }
        if (i > 0) {
            if (words[i][0] !== words[i-1].at(-1)) {
                answer[0] = i%n + 1;
                answer[1] = count;
                break;
            }
            if (words.findIndex(v => v === words[i]) !== i) {
                answer[0] = i%n + 1;
                answer[1] = count;
                break;
            }
        }
    }

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
