/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length=== 0 || nums=== null)
        return 0;
    
    for (var i = nums.length; i--; ) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
    }
    console.log(nums);
};

moveZeroes([0,1,0,13,0,22,0]);
