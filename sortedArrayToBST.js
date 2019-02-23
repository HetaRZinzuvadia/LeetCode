var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const middlePoint = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middlePoint]);
    console.log(root);
  root.left = sortedArrayToBST(nums.slice(0, middlePoint));
  root.right = sortedArrayToBST(nums.slice(middlePoint + 1));
  return root;
};