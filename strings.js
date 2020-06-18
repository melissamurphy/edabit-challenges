// https://edabit.com/challenge/YjkNx49pk7Eois9pi
// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

function isSafeBridge(str) {
  return str.includes(' ') ? false : true
}

// Robin wants to challenge you to go back to the basics and write a function that determines if a given string is a palindrome or not.In case you need a refresher on palindromes: a palindrome is a string that is read the same front to back and back to front.For example, words like Mom, Kayak, and noon are palindromes.Palindromes can also be longer strings made up of multiple words, such as: "Was it a cat I saw"

// index increments and loop runs as long as it is < Math.floor(string.length/2)
// as index increments, so does the comparison to length - index
// Loop runs as long as they are ===
// Loop finishes with boolean true

function palindrome(string) {
  string = string.toLowerCase().split(' ').join('');
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// normalize casing since unequal casing makes comparison false
// eliminate white spaces (with split and join) that may make the comparison false
