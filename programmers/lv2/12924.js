// https://school.programmers.co.kr/learn/courses/30/lessons/12924
const example = require('./example/12924');

function solution({n}) {
    let answer = 0;
    let start = 1;
    while (start <= n/2) {
        let sum = 0;
        for (let i = start; i <= n; i++) {
            sum += i;
            if (sum === n) {
                answer ++;
                break;
            }
            if (sum > n) {
                break;
            }
        }
        start ++;
    }
    answer ++;

    // 다른 사람 풀이
    // 홀수인 약수의 개수
    // for (let i = 1; i <= n; i++) {
    //     if ((n % i === 0) && (n % 2 === 1)) {
    //         answer ++;
    //     }
    // }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
