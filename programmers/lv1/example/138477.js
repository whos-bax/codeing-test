// https://school.programmers.co.kr/learn/courses/30/lessons/138477
module.exports = example = {
    input: [
        {
            k: 3,
            score: [10, 100, 20, 150, 1, 100, 200]
        },
        {
            k: 4,
            score: [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
        },
    ],
    result: [
        [10, 10, 10, 20, 20, 100, 100],
        [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
    ]
}
