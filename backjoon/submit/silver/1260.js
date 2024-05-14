// 실버 2
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);

const graph = Array.from(Array(n + 1), () => []);

const edge = [];
for (let i = 0; i < input.slice(1).length; i++) {
  edge.push(input.slice(1)[i].split(" "));
}

for (const [from, to] of edge) {
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((ele) => ele.sort((a, b) => a - b));

let visited = new Array(n + 1).fill(0);
let answer_dfs = [];

// DFS
function DFS(v) {
  if (visited[v]) return;
  visited[v] = 1;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}
DFS(v);
console.log(answer_dfs.join(" "));

// BFS
let answer_bfs = [];
visited.fill(0);
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(answer_bfs.join(" "));
