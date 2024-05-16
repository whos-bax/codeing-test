// https://school.programmers.co.kr/learn/courses/30/lessons/120907
const example = require('./example/120907');

function solution({quiz}) {
    let answer = [];
    quiz.map((v) => {
        let list = v.split(' ');
        const [a, op, b, eq, res] = list;
        if (op === '-') {
            if (Number(a) - Number(b) === Number(res)) {
                answer.push("O")
            } else {
                answer.push("X")
            }
        } else {
            if (Number(a) + Number(b) === Number(res)) {
                answer.push("O")
            } else {
                answer.push("X")
            }
        }
    })

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
