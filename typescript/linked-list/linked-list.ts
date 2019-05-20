class LinkedNode<T> {
    previous: LinkedNode<T>;
    next: LinkedNode<T>;
    value: T;
}

class LinkedList<T> {
    private head: LinkedNode<T>;
    private tail: LinkedNode<T>;
    private size: number;

    protected _insert(value: T, previous: LinkedNode<T>, next: LinkedNode<T>): void {
        const node = new LinkedNode<T>();
        node.value = value;
        previous.next = node;
        node.previous = previous;
        next.previous = node;
        node.next = next;
    }

    protected _remove(node: LinkedNode<T>): T {
        const previous = node.previous;
        const next = node.next;
        previous.next = next;
        next.previous = previous;
        return node.value;
    }

    constructor() {
        this.head = new LinkedNode<T>();
        this.tail = new LinkedNode<T>();
        this.head.next = this.tail;
        this.tail.previous = this.head;
        this.size = 0;
    }

    push(value: T) {
        this._insert(value, this.tail.previous, this.tail);
        this.size += 1;
    }

    pop(): T {
        const value = this._remove(this.tail.previous);
        this.size -= 1;
        return value;
    }

    unshift(value: T): void {
        this._insert(value, this.head, this.head.next);
        this.size += 1;
    }

    shift(): T {
        const value = this._remove(this.head.next);
        this.size -= 1;
        return value;
    }

    count(): number {
        return this.size;
    }

    delete(value: T) {
        let node = this.head.next;
        while (node !== this.tail && node.value !== value) {
            node = node.next;
        }
        if (node !== this.tail) {
            this._remove(node);
            this.size -= 1;
        }
    }
}

export default LinkedList;
