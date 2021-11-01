const LinkedList = require("./linked-list");

class Stack {
    constructor() {
        this.store = new LinkedList;
        
    }

    push(item) {
        this.store.addLast(item);
        return this.store.getLast();
    }

    pop() {
        let removedItem = this.store.getLast();
        this.store.delete(removedItem);
        return removedItem;
    }

    isEmpty() {
        if (this.store.length() === 0) {
            return true
        }
        return false;

    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;