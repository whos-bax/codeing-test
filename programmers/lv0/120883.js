// https://school.programmers.co.kr/learn/courses/30/lessons/120883
const example = require('./example/120883');

function solution({id_pw, db}) {
    let answer = '';
    const [id, pw] = id_pw;

    for (let i = 0; i < db.length; i++) {
        const [db_id, db_pw] = db[i];
        if (db_id === id) {
            if (db_pw === pw) {
                answer = 'login';
                break;
            } else {
                answer = 'wrong pw';
                break;
            }
        } else {
            answer = 'fail'
        }
    }

    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
