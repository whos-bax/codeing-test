/*
[일반 프로그래밍 문제] 사은품 교환하기

입력
4
12 0
10 14
4 20
5 2147483648

출력
1
2
0
1
*/

// Run by Node.js
// BigInt 사용

const solution =([N,M]) => {
	const k1 = N / 5n;
	const k2 = (N + M) / 12n;
	const answer = k1 < k2 ? k1 : k2;
	console.log(String(answer))
	// console.log(k1, k2)
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let T = null;
	
rl.on("line", function(line) {
	if (T === null) {
		T = +line
	} else {
		solution(line.split(' ').map(a => BigInt(a)))
		T--
	}
	if (!T) {
		rl.close()
	}
}).on("close", function() {
	process.exit();
});