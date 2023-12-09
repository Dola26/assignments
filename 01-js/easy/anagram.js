/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let n1 = str1.length;
    let n2 = str2.length;

    //removing space by using regex
 let m1=str1.replace(/\s/g,'').toLowerCase();
 let m2=str2.replace(/\s/g,'').toLowerCase();

   
    // If length of both strings is not 
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;
   
    // Sort both strings
    let key1=m1.split('').sort().join('')
    console.log(key1)
   let key2 =  m2.split('').sort().join('')
    console.log(key2)
   
    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (key1[i] != key2[i])
            return false;
   
    return true;
}



module.exports = isAnagram;
