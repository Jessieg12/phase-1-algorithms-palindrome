function isPalindrome(word) {
  // Write your algorithm here
  let wordLength = word.length
  for(let i = 0 ; i < wordLength /2 ; i++){
    if(word[i] != word[wordLength -1 - i]){
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
  need to write a function that will...
  take a word,
  interate over each letter,
  if that letter matches the last letter keep iterating,
  if not return false,
  once word has gone through every letter and every single one matches,
  return true
*/

/*
I needed to take the length of whatever word I was working with and find the length of the world
from there I needed to iterate through each letter of that word but in doing so I want to divide that word in two so I can check both halves at the same time
increment to move onto the next letter
if the first letter of the word im working with does not match with the ending shown in line 5 by taking the world length half and decrementing each time by 1
if it doesnt match we return false
if it does match all the way we return true
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
