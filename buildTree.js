var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null
    let root = preorder.shift()
    let node = new TreeNode(root)
    let index = inorder.indexOf(root)
    node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index), inorder.slice(index + 1))
    return node
};
console.log( buildTree([3,9,20,15,7], [9,3,15,20,7]) );

