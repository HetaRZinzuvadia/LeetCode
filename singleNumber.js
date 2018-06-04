/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {    
    function compare(num1, num2){
        return num1- num2;
    }
    nums.sort(compare);
    var a=0;
    for(var i=0; i< nums.length; i++){
        a ^= nums[i];
    }
    return a;
};

var sol= singleNumber([1,2,6,3,2,1,3]);
console.log(sol);
