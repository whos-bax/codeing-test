// https://school.programmers.co.kr/learn/courses/30/lessons/142086
const example = require('./example/142086');

function solution({s}) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        let index = s.indexOf(s[i]);
        if (index === i) {
            index = -1;
        } else {
            for (let j = i - 1; j >= 0; j--) {
                if (s[j] === s[i]) {
                    index = i - j;
                    break;
                } else {
                    index = i - index;
                }
            }
        }
        answer.push(index);
    }

    // 다른 사람 풀이
    // answer = [...s].map((char, i) => {
    //     const count = s.slice(0, i).lastIndexOf(char);
    //     return count < 0 ? count : i - count;
    // });
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
