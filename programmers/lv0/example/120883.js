// https://school.programmers.co.kr/learn/courses/30/lessons/120883
module.exports = example = {
    input: [
        {
            id_pw: ["meosseugi", "1234"],
            db: [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]
        },
        {
            id_pw: ["programmer01", "15789"],
            db: [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]],

        },
        {
            id_pw: ["rabbit04", "98761"],
            db: [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]
        },
    ],
    result: [
        "login",
        "wrong pw",
        "fail"
    ]
}
