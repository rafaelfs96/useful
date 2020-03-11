export class LinkedListItem<T> {
  val: T
  prev: LinkedListItem<T>
  next: LinkedListItem<T>

  constructor(val: T) {
    this.val = val
    this.prev = undefined
    this.next = undefined
  }
}