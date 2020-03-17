import { LinkedListItem } from "./LinkedNode"

export class LinkedList<T> {
  private size: number
  private head: LinkedListItem<T>
  private tail: LinkedListItem<T>

  constructor() {
    this.size = 0
    this.head = this.tail = undefined
  }

  // insert an item in specific position
  insert(val: T, previousItem: T): void {
    const newItem: LinkedListItem<T> = new LinkedListItem<T>(val)
    let currentItem: LinkedListItem<T> = this.head

    if(this.size === 0) {
      this.head = this.tail = newItem
      this.size++
    }
    else {
      let previous: LinkedListItem<T> = new LinkedListItem<T>(previousItem)
      while(true) {
        if(currentItem.val === previous.val) {
          let tempNextItem: LinkedListItem<T> = currentItem.next

          currentItem.next = newItem
          newItem.prev = currentItem
          newItem.next = tempNextItem

          tempNextItem.prev = newItem
          tempNextItem.next = undefined
          this.size++
          break
        } else if(currentItem.next) currentItem = currentItem.next
        else throw new Error('Can\'t find ' + previousItem)
      }
    }
  }

  // add item at the beginning of the list
  unshift(val: T): void {
    const node: LinkedListItem<T> = new LinkedListItem(val)
    
    if(this.size === 0) this.head = this.tail = node
    else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.size++
  }

  // add item at the end of the list
  push(val: T): void {
    const node: LinkedListItem<T> = new LinkedListItem(val)

    if(this.size === 0) this.head = this.tail = node
    else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.size++
  }

  // returns the last item of the list
  pop(): T {
    this.size--
    const ret: LinkedListItem<T> = this.head

    if(this.size > 0) {
      this.tail = this.tail.prev
      this.tail.next = undefined
    } else this.resetHeadAndTail()

    return ret.val
  }

  // returns the first item of the list
  shift(): T {
    this.size--
    const ret: LinkedListItem<T> = this.head

    if(this.size > 0) {
      this.head = this.head.next
      this.head.prev = undefined
    } else this.resetHeadAndTail()

    return ret.val
  }

  find(val: T): LinkedListItem<T> {
    const node = new LinkedListItem<T>(val)
    let item = this.head

    let result: LinkedListItem<T> = null

    while(true) {
      if(node.val === item.val) {
        result = item
        break
      } else if (item.next) item = item.next
      else throw new Error('Can\'t find ' + val)
    }

    return result
  }

  count(): number {
    return this.size
  }

  delete(val: T): void {
    let tempNode: LinkedListItem<T> = this.head

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

  show(): Array<T> {
    let arr: Array<T> = []
    let currentItem = this.head

    while(true) {
      arr.push(currentItem.val)

      if(currentItem.next) currentItem = currentItem.next
      else break
    }
    return arr
  }

  private resetHeadAndTail(): void {
    this.head = this.tail = undefined
	}
}
