export class BinaryNode<T> {
  public val: T
  public left: BinaryNode<T>
  public right: BinaryNode<T>

  constructor(val: T) {
    this.val = val
    this.left = null
    this.right = null
  }

  isLeaf() {
    return (this.left == null && this.right == null)
  }

  hasOnlyLeftChild() {
    return (this.left !== null && this.right == null)
  }

  hasOnlyRightChild() {
    return (this.right !== null && this.left == null)
  }

  hasChildren() {
    return (this.left !== null && this.right !== null)
  }
}