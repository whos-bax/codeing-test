// https://school.programmers.co.kr/learn/courses/30/lessons/120880
const example = require('./example/120880');

function solution({numlist, n}) {
    let answer = [];
    answer = numlist.sort((a, b) => {
        let comA = Math.abs(n - a);
        let comB = Math.abs(n - b);
        if (comA > comB) {
            return 1;
        }
        if (comB > comA) {
            return -1;
        }
        if (comA === comB) {
            return b - a;
        }
    })
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
