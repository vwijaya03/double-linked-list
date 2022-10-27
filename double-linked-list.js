class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // tambah item baru di posisi terakhir
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // hapus item di posisi terakhir
    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;
            current.prev = null;
        }

        this.length--;

        return current;
    }

    // hapus item di posisi paling awal
    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;
    }

    // tambah item baru di posisi paling awal
    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }
}

const list = new DoubleLinkedList();
list.push(1);
list.push(10);
list.push(100);
// list.pop();
// list.pop();
list.shift();

console.log(list);
// console.log(StockPicker([14, 20, 4, 12, 5, 11]));

function StockPicker(arr) { 
    let lissf = arr[0];
    let profit = -1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > lissf) {
            profit = Math.max(profit, arr[i] - lissf);
        } else {
            lissf = arr[i];
        }
    }

    return profit;
}