// https://school.programmers.co.kr/learn/courses/30/lessons/120863
const example = require('./example/120863');

function solution({polynomial}) {
    let answer = '';
    let list = polynomial.split(" + ");

    let x = 0, y = 0;
    list.forEach(v => {
        if (v.includes("x")) {
            if (v === 'x') {
                x++;
            } else {
                x += Number(v.replace("x", ''))
            }
        } else {
            y += Number(v)
        }
    })

    answer = x === 0
        ? y.toString()
        : y === 0
            ? `${x === 1 ? 'x' : x + 'x'}`
            : `${x === 1 ? 'x' : x + 'x'} + ${y}`;

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
