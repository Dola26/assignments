/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1=str.replace(/[\s , !]/g,'').toLowerCase();
  console.log(str1)

  let str2=str1.split('')
  console.log(str2)

  let str3=str2.reverse().join('');
  console.log(typeof(str3))


  if(str1 === str3)
  return true;
return false
}

let ans =isPalindrome("Anna")
console.log(ans)
module.exports = isPalindrome;


