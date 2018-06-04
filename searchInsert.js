var searchInsert = function(nums, target) {
    var l =0;
    var h =nums.length -1;
    while( l <=h) {
        var mid =parseInt( ( l +h )/2);
        if( nums[mid] ==target) return mid;
        else if ( nums[mid] >target) {
				h =mid -1;
			}
			else{
				l =mid +1;
			}
    }
    return l;
};

console.log( searchInsert( [1,3,5,6], 7));
