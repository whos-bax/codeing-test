// https://school.programmers.co.kr/learn/courses/30/lessons/159994
const example = require('./example/159994');

function solution({cards1, cards2, goal}) {
    let answer = "Yes";
    for (let i = 0; i < goal.length; i++) {
        let word = goal[i];
        if (cards1[0] === word) {
            cards1.shift();
        } else if (cards2[0] === word) {
            cards2.shift();
        } else {
            answer = "No";
            break;
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
