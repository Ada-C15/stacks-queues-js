const LinkedList = require("../../linked-list-js/lib/linked-list");

class Stack {
    constructor() {
        this.store = new LinkedList()
    }

    push(value) {
        this.store.addFirst(value)
    }

    pop() {
        if (!this.store.head) return null;
        const poppedValue = this.store.head.value
        this.store.head = this.store.head.next
        return poppedValue
    }

    isEmpty() {
        if ((this.store == LinkedList) && !this.store.head) return true;

        if (this.store.head.next) return false;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;