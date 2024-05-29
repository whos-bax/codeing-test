// https://school.programmers.co.kr/learn/courses/30/lessons/176963
const example = require('./example/176963');

function solution({name, yearning, photo}) {
    let answer = [];
    photo.map((group) => {
        let score = 0;
        group.map((v, i) => {
            let idx = name.findIndex(value => value === v);
            if (idx !== -1) {
                score += yearning[idx];
            }
        })
        answer.push(score);
    })
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
