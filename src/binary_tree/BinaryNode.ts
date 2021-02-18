export class BinaryNode<T> {
  public val: T
  public left: BinaryNode<T>
  public right: BinaryNode<T>

  constructor(val: T) {
    this.val = val
    this.left = null
    this.right = null
  }

  isLeaf(): boolean {
    return this.left == null && this.right == null
  }

  hasOnlyLeftChild(): boolean {
    return this.left !== null && this.right == null
  }

  hasOnlyRightChild(): boolean {
    return this.right !== null && this.left == null
  }

  hasChildren(): boolean {
    return this.left !== null && this.right !== null
  }
}
