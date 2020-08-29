/* eslint-disable */

/**
 * 1) takes the elements input in an array
 * 2) Creates a Binary search tree by inserting data items into the binary search tree
 * 3) Performs in-order traversal on the tree to get elements in sorted order
 */

class Node{
    constructor(data) {
        this.data  = data
        this.left = null
        this.right = null
    }
}
class BinaryTree{
    constructor() {
        //root of the binary search tree
        this.root = null
    }
    insertData(data){
        let newNode = new Node(data)
        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode){
        if(newNode.data.perihelion_time < node.data.perihelion_time){
            if(node.left === null){
                node.left = newNode
            }else {
                this.insertNode(node.left, newNode)
            }
        }else {
            if(node.right === null){
                node.right = newNode
            }else {
                this.insertNode(node.right, newNode)
            }

        }
    }
}


export default BinaryTree
















