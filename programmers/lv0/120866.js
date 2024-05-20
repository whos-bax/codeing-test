// https://school.programmers.co.kr/learn/courses/30/lessons/120866
const example = require('./example/120866');

function solution({board}) {
    let answer = 0;
    let n = board.length;
    let list = Array.from(Array(n), () => Array(n).fill(true));
    for (let i = 0; i < n; i++) {
        for (let j = 0 ; j < n; j++) {
            if (board[i][j] === 1) {
                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        if (i + x >= 0 && i + x < n) {
                            if (j + y >= 0 && j + y < n) {
                                list[i + x][j + y] = false
                            }
                        }
                    }
                }
            }
        }
    }

    answer = list.map(row => row.filter(v => v).length).reduce((a, c) => a + c, 0)
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
