/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null)
        return false;
    
    while(true) {
        let data = root.data;
        if(data < root.left){
            isValidBST(root.left);
        }
        else if(data > root.right) {
            isValidBST(root.right);
        }
        return true;
    }
    return false;
    
};