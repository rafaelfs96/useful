import { BinaryNode } from "./BinaryNode";

export class BinaryTree<T> {
  private root: BinaryNode<T> = null

  constructor() {
    this.root = null
  }

  private insert(node: BinaryNode<T>, val: T): void {
    if(!node) this.root = new BinaryNode(val)
    else {
      if(val <= node.val) {
        if(!node.left) node.left = new BinaryNode(val)
        else return this.insert(node.left, val)
      } else {
        if(!node.right) node.right = new BinaryNode(val)
        else return this.insert(node.right, val)
      }
    }
  }

  private findNode(node: BinaryNode<T>, val: T): BinaryNode<T> {
    if(!node) return node
    else {
      if(val < node.val) return this.findNode(node.left, val)
      else if(val > node.val) return this.findNode(node.right, val)
      else return node
    }
  }

  private deleteNode(parent: BinaryNode<T>, node: BinaryNode<T>, val: T): void {
    if(node == null) return

    if(val < node.val) return this.deleteNode(node, node.left, val)
    else if(val > node.val) return this.deleteNode(node, node.right, val)
    else {
      if(node.isLeaf()) {
        if(node == this.root) this.root = null
        else if(val < parent.val) parent.left = null
        else parent.right = null
      } else if(node.hasOnlyLeftChild()) {
        if(node == this.root) this.root = node.left
        else if(val < parent.val) parent.left = node.left
        else parent.right = node.left
      } else if(node.hasOnlyRightChild()) {
        if (node == this.root) this.root = node.right
        else if (val < parent.val) parent.left = node.right
        else parent.right = node.right
      } else if(node.hasChildren()) {
        let leftMost: BinaryNode<T> = this.goLeft(node.right)
        leftMost.left = node.left
        if(val < parent.val) parent.left = node.right
        else parent.right = node.right

        if(this.root == node) this.root = node.right
      }
    }
  }

  private goLeft(node: BinaryNode<T>): BinaryNode<T> {
    if(!node.left) return node
    else return this.goLeft(node.left)
  }

  exists(val: T): boolean {
    let dummy = this.root
    let result: boolean = Boolean(this.findNode(dummy, val))
    return result
  }

  remove(val: T): void {
      let dummy = this.root
      this.deleteNode(dummy, dummy, val)
  }

  add(val: T): void {
      let dummy = this.root
      this.insert(dummy, val)
  }

  show(): void {
    console.log(this.root)
  }
}