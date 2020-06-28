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

//It's time to write a function that takes in 10 integers and returns the phone number as a formatted string. The string would look something like this: (123) 456-7890
function phoneNumber(string) {
  return "(" + string.slice(0, 3) + ")" + string.slice(3, 6) + "-" + string.slice(6, 10);
}

//This function should take in an array (each array element represents a slot item) and return true if all of the elements are the same
function isJackpot(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      return false;
    }
  }
  return true;
}

// myRobin: Why don't you do the same: write a function that removes each "fly" you see in a string, as well as any letter from the word "fly" (f, l, or y), just to be safe!

function removeFly(string){
  var newString = "";
  for(var i=0; i < string.length; i++){
    if (string[i]!=="f"&& string[i]!=="l"&&string[i]!=="y"){
      newString = newString + string[i];
    }
  }
  if(string===newString){
    return "No flies here!"
  } else {
    return newString;
  }
}
