// https://school.programmers.co.kr/learn/courses/30/lessons/120956
const example = require('./example/120956');

function solution({babbling}) {
    let answer = 0;
    let list = ["aya", "ye", "woo", "ma"];

    let result = [...babbling];

    for (let i = 0; i < babbling.length; i++) {
        list.map(v => {
            let word = result[i];
            let str = word.split(v).filter(v => v !== '').join(' ');
            result[i] = str.trim();
        })
    }
    answer = result.filter(v => v === '').length;
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
