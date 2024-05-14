// https://school.programmers.co.kr/learn/courses/30/lessons/120894
const example = require('./example/120894');

function solution(numbers) {
    let answer = numbers;
    let list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    list.map((v, i) => {
        while (answer.includes(v)) {
            answer = answer.replace(v, i.toString());
        }
    })
    console.log(answer)
    return parseInt(answer);
}

for (let i = 0; i < example.numbers.length; i++) {
    console.log(solution(example.numbers[i]) === example.result[i]);
}
