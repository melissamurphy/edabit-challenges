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

// myRobin: Check if the asterisk is inside of the box.The function you write must return true only if the asterisk is INSIDE
function inBox(array) {
  for (var i = 0; i < array.length; i++) {
    if (
      array[i].includes("*") &&
      array[i][0] !== "*" &&
      array[i][array[i].length - 1] !== "*"
    ) {
      return true;
    }
  }
  return false;
}

console.log(inBox(["####", "#* #", "#  #", "####"]));

//myRobin:
function vowelCount(string) {
  var count = 0;
  string = string.toLowerCase(); // must assign the new value (the value returned by toLowerCase) to variable 'string' for future operations
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
      count++;
    }
  }
  return count;
}
console.log(vowelCount("vowelCOUNT"));


//myRobin: Each letter's value comes from its position in the alphabet (a=1, b=2, etc.) and can be summed to determine the left and right hand sums. If a word has an odd number of characters, the middle character should be ignored. Can you write a function that determines whether or not a word is balanced?
function isBalanced(string) {
  string = string.toLowerCase();
  var leftSum = 0;
  var rightSum = 0;
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    leftSum = leftSum + string.charCodeAt(i);
    rightSum = rightSum + string.charCodeAt(string.length - 1 - i); // must subtract 1 from length ANY time you want to the last character of a string!
  }
  return leftSum === rightSum;
}

//myRobin: Can you write a function that counts the number of words that ends in 'ly'. For this problem, even if the word is an adjective, it's still okay to count it as true. However, you must not count the word if it starts or contains 'ly' - it MUST be at the end

function adverbCounter(string) {
  var array = string.split(" ");
  var adverbs = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i][array[i].length - 1] === "y" && array[i][array[i].length - 2] === "l") {
      adverbs++;
    }
  }
  return adverbs;
}

function numScan(string) { return !isNaN(parseFloat(n)) && isFinite(n); }

console.log(numScanner("2.2"))
console.log(numScanner("1208"))
console.log(numScanner("number"))
console.log(numScanner("0x71e"))
console.log(numScanner("2.5.9"))
console.log(numScanner("3/2"))

//myRobin: For some odd reason, your computer science professor has become obsessed with parentheses - she probably spent too much time coding these days... In any case, she wants you to write a function that will turn each group of parentheses in a string into separate groups - these groups should be balanced.

// For example:

// group("()()()") ➞["()", "()", "()"]

// group("((())()) (()(()()))") ➞["((())())", "(()(()()))"]

function groupParens(string) {
  var array = [];
  for(var i=0; i<string.length; i++) {
    if(string[i]==="(" && string[string.length-1]===")") {
      if(string[i+1]!==string[i]) {
        array.push(string.slice(0, i+2));
        string = string.slice(i+2)
      }
    }
  }
  return array;
}

// myRobin: For instance: in JavaScript, you’d write yellowMonkey but in Python you’d write yellow_monkey. In case you forget, you should just build a function where you convert any string in Camel case to Pothole case.

function pothole(string) {

}

// myRobin: Write a function that returns the number of sock pairs you find in the pile. Two instances of the same letter, in our case, will represent a sock pair. For example, "ss".

// Alphabetize the string by converting to array (split('')) and Sort'ing (then join(''))
function pairs(string) {
  var pairs = 0;
  if (string.length <= 1) {
    return pairs;
  }
  string = string.toLowerCase().split("").sort().join("");
  // Operations are NOT complete until the new value is SET to the variable of the original string!
  for (var i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      pairs++;
    }
  }
  return pairs;
}

console.log(pairs("ammtaxt"));

//Write a function to simulate this game! Pass in a number of petals. Return "Loves me, Loves me not, Loves me...etc". On the LAST phrase, write it in ALL CAPS.

function doYouLoveMe(num) {
  var string = "";
  if (num <= 0) {
    return string;
  }
  for (var currentNum = 0; currentNum < num - 1; currentNum++) {
    if (currentNum % 2 === 0) {
      string = string + "Loves me, "
    } else {
      string = string + "Loves me not, "
    }
  }
  if (currentNum % 2 === 0) {
    return string + "LOVES ME"
  } else {
    return string + "LOVES ME NOT"
  }

  // if num is 0 or less, then return empty sentence
  // if last phrase, convert to all caps (toUpperCase());
  // start with current num at 0
  // last phrase is reached when current num reaches num (count up)
}

console.log(doYouLoveMe(4))

// In trying to come up with an insult for your old-fashioned friend (jokingly, of course), you ask "What century are you even from?" This made you think about how to convert a year into century format - and you have no idea! After doing a little research, you decide to come up with a function to save other people from your misery in the future. Please write a function that takes in a year and returns the corresponding century. You will only be allowed to input years from 1000 - 2010.

function whichCentury(string) {
  if (string[2] === "0" && string[3] == "0") {
    return (string / 100).toFixed();;
  } else return Math.ceil(string / 100);
}

console.log(whichCentury("2000"))
console.log(whichCentury("1900"))

function alternateCase(string) {
  string = string.toLowerCase();;
  for (var i = 1; i < string.length; i++) {
    if (string.charCodeAt(i - 1) > 96) {
      console.log("it was lowercase")
      string = string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1, string.length)
    } else {
      console.log("it was uppercase")
      string = string.slice(0, i) + string[i].toLowerCase() + string.slice(i + 1, string.length);
    }
  }
  return string;
}

console.log(alternateCase("HELLO"))
