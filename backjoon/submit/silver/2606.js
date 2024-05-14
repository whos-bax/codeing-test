// 실버 3
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let node = Number(input[0]);
let nums = input.slice(2);
const edge = [];
for (const num of nums) {
  edge.push(num.split(" ").map(Number));
}

const graph = Array.from(Array(node + 1), () => []);
let visited = new Array(node + 1).fill(0);

for (const [from, to] of edge) {
  graph[from].push(to);
  graph[to].push(from);
}

let answer = [];

function dfs(start) {
  if (visited[start]) return;
  visited[start] = true;
  answer.push(start);
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (visited[next] === 0) {
      dfs(next);
    }
  }
}

dfs(1);
console.log(answer.slice(1).length);
