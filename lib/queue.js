class Queue {
    constructor() {
        this.store = new Array(20);
        this.front = 0;
        this.rear = 0; 
    }

    enqueue(element) {
        if (this.rear === (this.size() - 1)) {
            throw new Error ('queue full');
        } else {
            this.rear++;
        }
        this.store[this.rear] = element;
    }

    dequeue() {
        if (this.front === (this.size() - 1)) {
            throw new Error ('queue full');
        } else {
            this.front++;
        }

        const fifo = this.store[this.front];
        this.store[this.front] = null;

        return fifo;
    }

    front() {
        return this.store[0];
    }

    size() {
        for (let itemsInQueue = 0; this.store !== 0; itemsInQueue++) 
        return itemsInQueue;
    }

    isEmpty() {
        
        if (this.front === this.rear) {
            return true;
        };
        return false;
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