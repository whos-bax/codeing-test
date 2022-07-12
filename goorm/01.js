/*
[일반 프로그래밍 문제] 문제 선정하기

입력
6
3 1 4 1 5 9
-
5
1 10 1 10 1

출력
YES
-
NO
*/

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function solution(input) {
	const nums = input.shift();
	const quest = input[0].split(' ').map(a=>Number(a))
	quest.sort((a,b)=> a-b)
	const threeQuest = quest.filter((a,b)=>quest.indexOf(a) === b)
	
	if (threeQuest.length >= 3) console.log("YES")
	else console.log("NO")
	
}

let input = [];
rl.on("line", function(line) {
	input.push(line)
}).on("close", function() {
	solution(input)
	process.exit();
});