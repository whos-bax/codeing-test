const example = require('./example/181832');

function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));

    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0, dir = 0, count = 1;
    while (count <= n ** 2) {
        answer[x][y] = count;
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];
        if (
            nextX >= n
            || nextX < 0
            || nextY >= n
            || nextY < 0
            || answer[nextX][nextY] !== 0
        ) {
            dir = (dir + 1) % 4;
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }
        x = nextX;
        y = nextY;
        count++;
    }
    return answer
}

for (let i = 0; i < example.len; i++) {
    console.log(solution(example.n[i]));
}
