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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;

        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;

            while(count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        const node = this.get(index);

        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;

        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
     
        while (current) {
            let next = current.next;
            let prev = current.prev;
            current.next = prev;
            current.prev = next;
            current = next;
        }
        return this;
    }
}

const list = new DoubleLinkedList();
list.push(1);
list.push(10);
list.push(100);
list.insert(1, 1000);
// list.pop();
// list.pop();
// list.shift();
list.remove(1);

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