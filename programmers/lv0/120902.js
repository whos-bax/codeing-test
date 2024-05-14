// https://school.programmers.co.kr/learn/courses/30/lessons/120902
const example = require('./example/120902');

function solution(my_string) {
    let answer = 0;

    let list = ["+", ...my_string.split(" ")]
    for (let i = 0; i < list.length; i += 2) {
        answer += Number(list[i] + list[i + 1]);
    }
    return answer;
}

for (let i = 0; i < example.my_string.length; i++) {
    console.log(solution(example.my_string[i]) === example.result[i]);
}
