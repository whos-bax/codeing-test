// https://school.programmers.co.kr/learn/courses/30/lessons/42577
const example = require('./example/42577');

function solution({phone_book}) {
    var answer = true;
    answer = phone_book.sort().some((v, i, arr) => {
        return arr[i + 1]?.indexOf(v) === 0
    });
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
