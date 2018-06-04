var maxProfit = function(prices) {
    if(prices === null || prices.length === 0){
        return 0;
    }
    
    var profit = 0, diff;
    for(var i = 1; i < prices.length; i++){
       diff = prices[i] - prices[i-1];
        if(diff > 0){
            profit += diff;
        }
    }
    
    return profit;
};
