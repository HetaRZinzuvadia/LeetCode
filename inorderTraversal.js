/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    dfs(root);
    
    function dfs(root) {
        if(root != null) {
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
        }
    }
    
    return result;
};

console.log(inorderTraversal([1,null,1,2,3]));