// https://school.programmers.co.kr/learn/courses/30/lessons/12973
const example = require('./example/12973');

function solution({s}) {
    let answer = -1;
    let list = [];
    // let i = 0;
    // while (i < s.length) {
    //     if (s[i] !== s[i + 1]) {
    //         if (list.at(-1) === s[i]) {
    //             list.pop();
    //         } else {
    //             list.push(s[i]);
    //         }
    //     } else {
    //         i++;
    //     }
    //     i++;
    // }
    [...s].forEach((v, i) => {
        if (list.at(-1) === v) list.pop();
        else list.push(v);
    })
    answer = list.length > 0 ? 0 : 1
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
