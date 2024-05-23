// https://school.programmers.co.kr/learn/courses/30/lessons/42885
const example = require('./example/42885');

function solution({people, limit}) {
    let answer = 0;
    people.sort((a, b) => a - b);

    while (people.length > 0) {
        let sum = people.pop();
        if (sum + people.at(-1) <= limit) {
            sum += people.pop();
        } else if (sum + people[0] <= limit) {
            sum += people.shift();
        }
        answer++;
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
