// https://school.programmers.co.kr/learn/courses/30/lessons/17681
const example = require('./example/17681');

function solution({n, arr1, arr2}) {
    let answer = [];
    let list1 = [], list2 = [];
    list1 = arr1.map(v => {
        let value = v.toString(2).length === n ? v.toString(2) : '0'.repeat(n - v.toString(2).length) + v.toString(2);
        return [...value];
    })
    list2 = arr2.map(v => {
        let value = v.toString(2).length === n ? v.toString(2) : '0'.repeat(n - v.toString(2).length) + v.toString(2);
        return [...value];
    })

    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            if (list1[i][j] === '1' || list2[i][j] === '1') {
                arr.push('#')
            } else {
                arr.push(" ")
            }
        }
        answer.push(arr.join(""))
    }

    // 다른 사람 풀이
    // answer = arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
    // const addZero = (n, s) => {
    //     return '0'.repeat(n - s.length) + s;
    // }

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
