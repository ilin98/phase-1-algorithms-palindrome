function isPalindrome(word) {
  let reverseArray = [];
  let wordArray = word.split('')
  console.log(wordArray)
  for(letters of wordArray) {
    reverseArray.unshift(letters)
  }
  console.log(reverseArray)
  let reverseWord = reverseArray.join('')
  if (reverseWord === word) {
    return true;
  } else {
    return false
  }
}


/*
  Add your pseudocode here
  take in a string
  convert string into an array
  have an empty array

  iterate through each letter of the input array
    unshift each letter into the empty array
  join the elements of the array together into a string

  if the new string equals the input string, return true
  else, return false
*/

/*
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
