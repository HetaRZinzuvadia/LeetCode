/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length=== 0 || nums=== null || k<0){ 
        return 0;
    }
    k %= nums.length;
    var tmp= [];
    if(k){
        tmp= nums.slice(-k);
    }
    nums.splice(-k,k);
    
    Array.prototype.unshift.apply(nums, tmp);
    console.log(nums);
};

rotate([1,2,3,4,5,6,7],3);
