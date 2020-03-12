import { LinkedListItem } from "./LinkedNode"

export class LinkedList<T> {
  private size: number
  private head: LinkedListItem<T>
  private tail: LinkedListItem<T>

  constructor() {
    this.size = 0
    this.head = this.tail = undefined
  }

  push(val: T): void {
    const node = new LinkedListItem(val)

    if(this.size === 0) this.head = this.tail = node
    else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.size++
  }

  pop(): T {
    this.size--
    const ret: LinkedListItem<T> = this.head

    if(this.size > 0) {
      this.tail = this.tail.prev
      this.tail.next = undefined
    } else this.resetHeadAndTail()

    return ret.val
  }

  shift(): T {
    this.size--
    const ret: LinkedListItem<T> = this.head

    if(this.size > 0) {
      this.head = this.head.next
      this.head.prev = undefined
    } else this.resetHeadAndTail()

    return ret.val
  }

  unshift(val: T): void {
    const node = new LinkedListItem(val)

    if(this.size === 0) this.head = this.tail = node
    else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.size++
  }

  count(): number {
    return this.size
  }

  delete(val: T): void {
    let tempNode = this.head

    while(tempNode.val !== val) {
      tempNode = tempNode.next
      if(tempNode === undefined) return
    }

    if (this.size === 1) this.resetHeadAndTail()
		else if (tempNode === this.head) this.shift()
		else if (tempNode === this.tail) this.pop()
		else {
			tempNode.prev.next = tempNode.next
			tempNode.next.prev = tempNode.prev
    }
    
		this.size--
  }

  private resetHeadAndTail(): void {
    this.head = this.tail = undefined
	}
}
