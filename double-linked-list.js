class Node{
    constructor(val){
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
}
        

function StockPicker(arr) { 
    let lissf = arr[0]
    let profit = -1
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > lissf) {
            profit = Math.max(profit, arr[i] - lissf)
        } else {
            lissf = arr[i]
        }
    }
    return profit
}

const list = new DoubleLinkedList();
list.push(1);
list.push(10);
list.push(100);
// list.pop();
// list.pop();
list.pop();

console.log(list);
// console.log(StockPicker([14, 20, 4, 12, 5, 11]));