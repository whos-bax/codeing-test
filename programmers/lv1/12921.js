// https://school.programmers.co.kr/learn/courses/30/lessons/12921
const example = require('./example/12921');

function solution({n}) {
    var answer = 0;
    let arr = Array(n+1).fill(1);
    answer = n-1;
    for (let i=2; i<Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j=i**2; j<=n; j+=i) {
                if (arr[j]) {
                    answer--;
                    arr[j]=0;
                }
            }
        }
    }
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
