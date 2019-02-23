/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let array = []
    dfs(root)
    return array[k-1]
    
    function dfs(root){
        if(!root){
            return
        }
        dfs(root.left)
        array.push(root.val)
        dfs(root.right)
    }
};
console.log(kthSmallest([5,3,6,2,4,null,null,1], k = 1));