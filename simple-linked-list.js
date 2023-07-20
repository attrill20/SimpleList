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
  constructor() {
    this._length = 0;
    this._head = null;
  }

  add(element) {
    if (this._head !== null) {
        element._next = this._head;
    }
    this._head = element;
    this._length++;
}

  get length() {
    return this._length
  }

  get head() {
    throw new Error('Remove this statement and implement this function');
  }

  toArray() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
