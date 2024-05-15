/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
if(str1.length != str2.length) return false;
str1=str1.toLowerCase(); str2=str2.toLowerCase();
const count={};

for(let letter of str1){

count[letter]=(count[letter] || 0)+1;

}
for(let letter of str2){

if(!count[letter]) return false;
count[letter]--;}
return true;
}

module.exports = isAnagram;
