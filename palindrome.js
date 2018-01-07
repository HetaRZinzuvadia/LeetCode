var isPalindrome = function(x) {
    var num= x;
    x= x+ "";
    var revNum= x.split('').reverse().join('');
    if( num=== parseInt(revNum, 10)){
        return true;
    }else{
        return false;
    }    
};

console.log( isPalindrome(998));