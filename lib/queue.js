

class Queue {
    constructor(size = 20) {
        this.size = size
        this.store = new Array(size);
        this.front = null;
        this.rear = null;
    }

    enqueue(element) {
        if (this.front == 0 && (this.rear == this.store.length - 1)){
            return false
        } else if (this.front == null) {
            this.front = 0
            this.rear = 0
            this.store[this.rear] = element
        } else {
            this.rear = (this.rear + 1) % this.size
            this.store[this.rear] = element
        }

    }

    dequeue() {
        throw new Error("This method has not been implemented!");
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