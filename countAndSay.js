/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === null || n.length === 0)
        return "";
    
    var start = "1", count = 1;    
    while(n > 1){
        var store = "";        
        for(var i = 0; i < start.length; i++){
            if(start[i] === start[i+1])
                count++;
            else{
                store += (count + "" + start[i]);
                count = 1;
            }
        }        
        start = store;
        n--;
    }
    return start;   
};

console.log(countAndSay(3));
