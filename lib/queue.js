

class Queue {
    constructor(size = 25) {
        this.size = size
        this.store = new Array(size);
        this.front = null;
        this.rear = null;
    }

    enqueue(element) {
        if (this.front == 0 && (this.rear == this.store.size - 1)){
            return false
        } else if (this.front == null) {
            // if the queue is empty
            this.front = 0
            this.rear = 0
            this.store[this.rear] = element
        } else {
            // remainder gives us 0 when full
            this.rear = (this.rear + 1) % this.size
            this.store[this.rear] = element
        }

    }

    dequeue() {
        if (this.front == null){
            return false;
        } else if (this.front == this.rear){
            let element = this.store[this.front]
            this.front = 0
            this.rear = 0
            return element 
        } else {
            let element = this.store[this.front]
            this.store[this.front] = null
            this.front = (this.front + 1 ) % this.size
            return element
        }
    }

    front() {
        throw new Error("This method has not been implemented!");
    }

    size() {
        throw new Error("This method has not been implemented!");
    }

    isEmpty() {
        throw new Error("This method has not been implemented!");
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;