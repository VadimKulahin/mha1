class Queue {
    constructor(capacity = Infinity) {
      this.arr = [];
      this.head = 0;
      this.tail = -1;
      this.capacity = capacity;
      this.count = 0;
    }
  
    empty() {
      return this.count === 0;
    }
  
    push(element) {
      if (this.count >= this.capacity) {
        throw new Error('Queue is full. Cannot push new element.');
      }
      this.tail = (this.tail + 1) % this.capacity;
      this.arr[this.tail] = element;
      this.count++;
    }
  
    pop() {
      if (this.empty()) {
        throw new Error('Queue is empty. Cannot pop an element.');
      }
      const element = this.arr[this.head];
      this.head = (this.head + 1) % this.capacity;
      this.count--;
      return element;
    }
  
    size() {
      return this.count;
    }
  }


  const queue = new Queue(5);
  console.log(queue.empty()); 
  
  queue.push(1);
  queue.push(2);
  queue.push(3);
  
  console.log(queue.empty()); 
  console.log(queue.size()); 
  
  console.log(queue.pop()); 
  console.log(queue.pop()); 
  
  console.log(queue.size()); 
  
  queue.push(4);
  queue.push(5);
  queue.push(6); 
  
  console.log(queue.size()); 
  