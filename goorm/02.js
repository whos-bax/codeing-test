/*
[일반 프로그래밍 문제] 근묵자흑

입력
4 3
2 3 1 4
-
37 4
31 36 20 30 1 9 6 13 3 29 11 25 7 8 2 24 34 18 26 15 23 28 37 19 21 4 32 14 16 10 12 27 22 35 5 17 33

출력
2
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
	let n = input[0].split(' ')[0]
	let k = input[0].split(' ')[1]
	
	const nums = input[1].split(' ')
	const min = Math.min(...nums)
	
	let minCount = 0;
	let sameMin = nums.filter(a => `${min}` === a).length
	
	minCount = Math.ceil((n - sameMin) / (k - 1))
	console.log(minCount)
}

let input = [];
rl.on("line", function(line) {
	input.push(line)
}).on("close", function() {
	solution(input)
	process.exit();
});