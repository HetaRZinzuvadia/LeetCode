/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement= function(nums, val) {
    if (nums.length == 0) return 0;
    var j=0;
    for(var  i=0; i< nums.length; i++) {
        if(nums[i] != val){
            nums[j]= nums[i];
            j= j+1;
        }
    }
    return j;
};

console.log( removeElement([3,2,2,3] ,3));