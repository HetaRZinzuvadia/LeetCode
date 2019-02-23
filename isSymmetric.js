var isSymmetric = function(root) {
    if(!root)
        return true;
    
    let isSymmetricHelper = (right, left) => {
        if(!right || !left)
            return false;
        
        if(!right && !left)
            return true;
        
        if(right.val !== left.val)
            return false;
        
        return (isSymmetricHelper(right.right, left.left) && isSymmetriHepler(right.left, left.right));
        
    };
    return isSymmetricHelper(root.right, root.left);
};