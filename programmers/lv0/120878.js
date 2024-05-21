// https://school.programmers.co.kr/learn/courses/30/lessons/120878
const example = require('./example/120878');

function solution({a, b}) {
    let answer = 0;
    let gcd = getGcd(a, b);
    a /= gcd; b /= gcd;

    let list = [];
    let divider = 2;

    while (b >= 2) {
        if (b % divider === 0) {
            list.push(divider);
            b /= divider;
        } else {
            divider ++;
        }
    }
    list = [...new Set(list)].filter(v => v !== 2 && v !== 5);
    answer = list.length > 0 ? 2 : 1
    return answer;
}

function getGcd(n1, n2) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(n1, n2); i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
