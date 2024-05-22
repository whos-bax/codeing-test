// https://school.programmers.co.kr/learn/courses/30/lessons/120921
const example = require('./example/120921');

function solution({A, B}) {
    let answer = -1;
    let list = [...A];
    if (A === B) {
        answer = 0;
    } else {
        for (let i = 1; i <= A.length; i++) {
            list.unshift(list.pop());
            if (list.join('') === B) {
                answer = i;
                break;
            }
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
