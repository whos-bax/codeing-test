// https://school.programmers.co.kr/learn/courses/30/lessons/120869
const example = require('./example/120869');

function solution({spell, dic}) {
    let answer = 0;
    dic.map((word, i) => {
        let tmp = [...spell];
        [...word].map(w => {
            let idx = tmp.findIndex(v => v === w);
            if (idx >= 0) {
                tmp.splice(idx, 1);
            }
        })
        if (tmp.length === 0) {
            answer ++;
        }
    })
    return answer > 0 ? answer : 2;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
