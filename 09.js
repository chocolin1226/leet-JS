// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  return String(String(x).split("").reverse()) === String(String(x).split(""));
};

console.log(isPalindrome(121));
