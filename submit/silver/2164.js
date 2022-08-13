// 실버 4
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// shift() 와 push() 를 사용하는 과정에서 시간 복잡도가 너무 커진다.
// 삽입 삭제가 빈번할 경우 LinkedList를 사용
const N = Number(input[0]);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

const cards = new LinkedList();
for (let i = 0; i < N; i++) {
  cards.add(i + 1);
}

while (cards.getSize() > 1) {
  cards.removeHead();
  cards.add(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());
