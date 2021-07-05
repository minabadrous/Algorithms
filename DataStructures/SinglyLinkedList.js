class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  checkLength() {
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } 
    
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if(this.length === 0) return undefined;

    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    this.checkLength()

    return current;
  }

  shift() {
    if(!this.head) return undefined;

    let newHead = this.head.next;
    this.head = newHead;
    console.log(this.length)
    this.length--;
    this.checkLength();
  }

  unshift(val) {
    if(!this.head) return undefined;

    let newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

let first = new SinglyLinkedList();
first.push("hello world");
first.push("hello world");
first.push("I am here");
first.push("where are you");

first.shift();

console.log(first);
