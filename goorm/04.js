/*
[일반 프로그래밍 문제] 숫자 카드 게임

입력
7 4
-
10 3

출력
5
-
12
*/

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function solution (input) {
	const n = input[0][0]
	const k = input[0][1]
	const cards = Array.from(Array(n), ()=>[])
	for (let i = 0; i < n; i ++) {
		cards[i] = i
	}
	
	let tmp = cards.reduce((a,b,c) => a + b + c == k)
	
	console.log(tmp)
}

let input = [];

rl.on("line", function(line) {
	input.push(line.split(' ').map(a=>Number(a)))
	solution(input)
}).on("close", function() {
	process.exit();
});