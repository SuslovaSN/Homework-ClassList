"use strict";
class LinkedNode {
    constructor(elem) {
        this._elem = elem;
        this.next = null;
    }
    get elem() {
        return this._elem;
    }
}
class LinkedList {
    constructor(headElement, list) {
        this.head = null;
        this.len = 0;
        this.head = headElement || null;
    }
    // добавить элемент
    append(elem) {
        let node = new LinkedNode(elem);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }
    // 1. Вставить элемент по номеру
    insert(elem, pos) {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let index = 0;
            let previous = current;
            let node = new LinkedNode(elem);
            if (pos === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        }
        else {
            return false;
        }
    }
    // 2. Удалить элемент по номеру
    removeAt(pos) {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let previous = current;
            let index = 0;
            if (pos === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current;
        }
        else {
            return null;
        }
    }
    // 3. Вывод элемента по номеру
    searchNodeByNumber(i) {
        let current = this.head;
        let counter = 0;
        while (current != null) {
            if (counter == i) {
                return current.elem;
            }
            counter++;
            current = current.next;
        }
        return null;
    }
    // 4А. вывод всего списка
    printLinkList() {
        if (this.head == null) {
            console.log("empty linked list");
            return;
        }
        let current;
        current = this.head;
        while (current != null) {
            console.log(current.elem);
            current = current.next;
        }
    }
    // 4Б. вывод всего списка строкой
    toString() {
        var current = this.head;
        var str = '';
        while (current) {
            str += current.elem;
            current = current.next;
        }
        return str;
    }
}
let obj = new LinkedList();
obj.append(3);
obj.append(17);
obj.append(4);
obj.append(10);
console.log(obj);
obj.insert(8, 1);
console.log(obj);
obj.removeAt(0);
console.log(obj);
console.log(`Вывод списка строкой: ${obj.toString()}`);
console.log(`Вывод всего списка: ${obj.printLinkList()}`);
console.log(`Поиск по номеру: ${obj.searchNodeByNumber(2)}`);
