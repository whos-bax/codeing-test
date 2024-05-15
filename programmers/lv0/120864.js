// https://school.programmers.co.kr/learn/courses/30/lessons/120864
const example = require('./example/120864');

function solution(my_string) {
    let answer = 0;
    for (let i = 0; i < my_string.length; i++) {
        let tmp = 0;
        while (!Number.isNaN(Number(my_string[i]))) {
            tmp += my_string[i];
            i++;
        }
        answer += Number(tmp);
    }
    return answer;
}

for (let i = 0; i < example.len; i++) {
    console.log(solution(example.my_string[i]) === example.result[i]);
}
