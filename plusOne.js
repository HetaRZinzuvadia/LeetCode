var plusOne = function(digits) {
  var ans = [];
  var add = 0;
  var len = digits.length;
  digits[len - 1]++;
  for(var i = len - 1; i >= 0; i--) {
    var sum = digits[i] + add;
    ans[i] = sum % 10;
    add = ~~(sum / 10);
  }
  if (add)
    ans.unshift(add);
  return ans;
};
