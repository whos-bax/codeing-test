// https://school.programmers.co.kr/learn/courses/30/lessons/12953
const example = require('./example/12953');

function solution({arr}) {
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
        answer = getLcm(answer, arr[i]);
    }
    return answer
}

function getLcm(n1, n2) {
    let lcm = 1;

    while (true) {
        if ((lcm % n1 === 0) && (lcm % n2 === 0)) {
            break;
        }
        lcm++;
    }
    return lcm;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
