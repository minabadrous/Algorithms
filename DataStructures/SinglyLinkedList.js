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

  get(index) {
    if(index > this.length || index < 0) return null;

    let current = this.head;
    while(index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }

  set(index, val) {
    if(index > this.length || index < 0) return null;

    this.get(index).val = val;
    return this.get(index);
  }

  insert(index, val) {
    if(index > this.length || index < 0) return null;

    let newNode = new Node(val);
    newNode.next = this.get(index);
    this.get(index - 1).next = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if(index > this.length || index < 0) return null;

    let val = this.get(index);
    if(index === this.length-1) this.pop();
    else if(index === 0) this.shift();
    else {
      this.get(index - 1).next = this.get(index + 1).next;
    }

    this.length--;
    this.checkLength();
    return val;
  }

  reverse() {
    let index = this.length - 1;

    while(index > 0) {
      this.get(index).next = this.get(index - 1);
      index--;
    }

    this.head.next = null;
    let tailVal = this.tail;
    this.tail = this.head;
    this.head = tailVal;
    return this;
  }
}

let first = new SinglyLinkedList();
first.push("hello world");
first.push("hey there!");
first.push("I am here");
first.push("where are you");

console.log(first.reverse())

