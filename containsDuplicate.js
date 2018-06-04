var containsDuplicate = function(nums) {
    function compare(num1, num2) {
        return num1 - num2;
    }
    nums.sort(compare);
    console.log(nums);
    for(var i= 0; i< nums.length ; i++){
        if(nums[i]== nums[i+1]){
            return true;
        }
    }
    return false;
};

var sol= containsDuplicate([2,14,28,22,22]);
console.log(sol);
