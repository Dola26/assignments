/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let str1 = str.replace(/\s/g, '').toLowerCase();
  let str2 = str1.split("");
  let count = 0;

  for (let i in str2) {
      // Check if the current character is a vowel
      if (str2[i] === 'a' || str2[i] === 'e' || str2[i] === 'i' || str2[i] === 'o' || str2[i] === 'u') {
          count++;
      }
  }

  return count;
}




module.exports = countVowels;