// https://school.programmers.co.kr/learn/courses/30/lessons/132267
const example = require('./example/132267');

function solution({a, b, n}) {
    let answer = 0;
    while (n >= a) {
        answer += b * Math.floor(n / a);
        n = b * Math.floor(n / a) + n % a;
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
