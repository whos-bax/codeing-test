// https://school.programmers.co.kr/learn/courses/30/lessons/176963
module.exports = example = {
    input: [
        {
            name: ["may", "kein", "kain", "radi"],
            yearning: [5, 10, 1, 3],
            photo: [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
        },
        {
            name: ["kali", "mari", "don"],
            yearning: [11, 1, 55],
            photo: [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
        },
        {
            name: ["may", "kein", "kain", "radi"],
            yearning: [5, 10, 1, 3],
            photo: [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
        },
    ],
    result: [
        [19, 15, 6],
        [67, 0, 55],
        [5, 15, 0]
    ]
}
