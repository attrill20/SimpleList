//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(values = []) {
    this._length = 0;
    this._head = null;

    if (Array.isArray(values)) {
      for (const value of values) {
        this.add(new Element(value));
      }
    }
  }

  add(element) {
    if (this._head !== null) {
        element._next = this._head;
    }
    this._head = element;
    this._length++;
}

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const array = [];
    let currentElement = this._head;
    while (currentElement !== null) {
      array.push(currentElement.value);
      currentElement = currentElement.next;
    }
    return array;
  }

  reverse() {
    return new List(this.toArray());
  }
}
