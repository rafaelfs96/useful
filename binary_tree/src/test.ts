import { BinaryTree } from "./BinaryTree";

let tree = new BinaryTree<Number>()

tree.add(10)
tree.add(1)
tree.add(3)
tree.add(4)
tree.add(12)
tree.add(7)
tree.add(0)

tree.remove(0)

tree.show()