// https://school.programmers.co.kr/learn/courses/30/lessons/12915
const example = require('./example/12915');

function solution({strings, n}) {
    let answer = [];
    answer = [...strings]
        .map(v => {
            return {
                value: v.slice(n, n + 1),
                word: v,
            }
        })
        .sort((a, b) => {
            if(a.value > b.value) return 1;
            if(a.value < b.value) return -1;
            if(a.value === b.value) {
                if (a.word > b.word) {
                    return 1;
                }
                if (a.word < b.word) {
                    return -1;
                }
                if (a.word === b.word) {
                    return 0;
                }
            }
        })
        .map(v => v.word);

    // 다른 사람 풀이
    // answer = strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
