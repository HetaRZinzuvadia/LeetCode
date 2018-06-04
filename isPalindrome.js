/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase();
    
    var start=0, end= s.length-1;
    while(start< end){
        if(!(s[start].match(/[a-z0-9]/)))
            start++;
        else if(!(s[end].match(/[a-z0-9]/)))
            end--;
        else if(s[start]=== s[end]){
            start++;
            end--;
        }
        else
            return false;
    }
    return true;
};

isPalindrome("race a car");

