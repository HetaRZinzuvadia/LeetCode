/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length<0)
        return false;
    var len=s.length;
    var revstr=[];
    for(var i=0; i< len; i++){
        revstr[i]=s[len-i-1];
    }
    revstr= revstr.join('');
    return revstr;
};

reverseString('hello');
