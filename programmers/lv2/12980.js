// https://school.programmers.co.kr/learn/courses/30/lessons/12980
const example = require('./example/12980');

function solution({n}) {
    let answer = 1;
    while (n!==1) {
        if (Number.isInteger(n/2)) {
            n/=2;
        } else {
            n--;
            answer++;
        }
    }

    // 다른 사람 풀이
    // 어떤 수 a에 2를 곱하는 방법을 a * 2로 생각할 수 있지만
    // 시프트 연산(a << 1) 도 동일한 결과입니다.
    // 왼쪽 시프트 연산의 경우 이진수 관점에서 가장 오른쪽에 0을 넣는 것과
    // 마찬가지죠 ( "0b101" << 1 = "0b1010").
    // 주어진 수를 이진수로 바꾸어 보면 1이 나오는 위치에서 1칸 이동(에너지 1)
    // 0이 나오는 위치에서 2배 이동(에너지 0)하면 되니, 답은 n을
    // 이진수로 바꿨을 때 1의 갯수입니다.
    return answer;
}

for (let i = 0; i < example.result.length; i++) {
    console.log(solution(example.input[i]) === example.result[i]);
}
