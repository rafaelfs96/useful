import { LinkedList } from "./linked_list/LinkedList";

let list = new LinkedList<String>()

list.unshift('1')
console.log(list.show())
list.unshift('2')
console.log(list.show())
list.unshift('3')
console.log(list.show())
list.push('0')
console.log(list.show())
list.pop()
console.log(list.show())
list.shift()
console.log(list.show())