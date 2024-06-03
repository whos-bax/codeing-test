// https://school.programmers.co.kr/learn/courses/30/lessons/42840
const example = require('./example/42840');

function solution({answers}) {
    let answer = [0, 0, 0];
    let arr=[[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];

    for (let i = 0; i < answers.length; i++) {
        let res = answers[i];
        if (arr[0][i % arr[0].length] === res) answer[0]++;
        if (arr[1][i % arr[1].length] === res) answer[1]++;
        if (arr[2][i % arr[2].length] === res) answer[2]++;
    }

    let max = Math.max(...answer);
    answer = answer.map((v, i) => {
        if (max === v) {
            return i + 1;
        }
    }).filter(v => v).sort((a, b) => a - b);
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
