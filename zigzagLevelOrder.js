/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let queue = [];
    let level = 0;
    helper(root, level, queue);
    return queue;
};    
function helper(node, level, queue) {
    if(!node) return queue;    
    if(!queue[level]) 
        queue[level] = [];
    
    if(level%2 == 1){
        queue[level].unshift(node.val);
    } else
        queue[level].push(node.val);
    
    helper(node.left, level+1, queue);
    helper(node.right, level+1, queue);
}

console.log(zigzagLevelOrder([3,9,20,null,null,15,7]));