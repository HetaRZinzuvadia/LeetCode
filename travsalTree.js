var levelOrder = function(root) {
    let queue = [];
    let level = 0;
    helper(root, level, queue);
    return queue;
};    
function helper(node, level, queue) {
    if(!node) return queue;    
    if(!queue[level]) 
        queue[level] = [];
    
    queue[level].push(node.val);
    
    helper(node.left, level+1, queue);
    helper(node.right, level+1, queue);
}

levelOrder([3,9,20,null,null,15,7]);