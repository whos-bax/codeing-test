// https://school.programmers.co.kr/learn/courses/30/lessons/120882
const example = require('./example/120882');

function solution({score}) {
    let answer = [];

    score = score.map((value) => {
        const [eng, math] = value;
        return (eng + math) / 2;
    });
    
    let sortList = [...score].sort((a,b) => b - a);

    score.map(v => {
        let index = sortList.findIndex(s => s === v);
        answer.push(index + 1)
    })
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
