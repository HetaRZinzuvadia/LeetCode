/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length=== 0)
        return false;
    var min= max= Number.MAX_SAFE_INTEGER, i=0;
    while(i< nums.length){
        if(nums[i]> max)
            return true;
        else if(nums[i]> min)
            max= nums[i];
        else 
            min= nums[i];
        i++;
    }
    return false;
};

console.log( increasingTriplet([1,2,3,5,6,9]));
