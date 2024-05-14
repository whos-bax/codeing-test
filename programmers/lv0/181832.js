const example = require('./example/181832');

function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    let x = 0, y = 0, count = 1;

    while (count < 15) {
        if (count < n + 1) {
            answer[0][count - 1] = count;
        } else if (count < n * 2) {
            answer[count % n][n - 1] = count;
        } else if (answer[n - 1][n - 1] > 0) {
            let last = answer[n - 1][n - 1];
            answer[n - 1][(n - 1) - (count - last)] = count;
        } else if (answer[0][n - 1] > 0) {
            // let last = answer[]
        }
        count ++;
    }
    // while (count < 6) {
    //     if (x === 0 && y === 0) {
    //         answer[y][x] = count;
    //         x++;
    //     } else {
    //         if (count <= n) {
    //             answer[y][x] = count;
    //             x++;
    //         }
    //     }
    //     count++;
    // }
    return answer
}

for (let i = 0; i < example.len; i++) {
    console.log(solution(example.n[i]));
}
