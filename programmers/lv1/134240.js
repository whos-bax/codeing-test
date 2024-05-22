// https://school.programmers.co.kr/learn/courses/30/lessons/134240
const example = require('./example/134240');

function solution({food}) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        let f = Math.floor(food[i] / 2);
        answer += i.toString().repeat(f);
    }
    answer += 0 + answer.split('').reverse().join('')
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
