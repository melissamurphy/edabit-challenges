function convert(minutes) {
  return minutes * 60;
}

function doMath(num1, num2, operator) {
  if(num2 === 0 && operator === "/") {
    return "illegal operation";
  }
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1*num2;
    case '/':
      return num1/num2;
  }
}

function intWithinBounds(n, lower, upper) {
  return !(n >= upper || n < lower || Number.isInteger(n) === false)
}
// false if n is not an integer
// false if n equals or exceeds upper
// false if n is less than lower


// myRobin
// Sheltered at home, you are so bored out of your mind that you start thinking about palindromes.A palindrome, in our case, is a number that reads the same in reverse as it reads normally.Robin challenges you to write a function that returns the closest palindrome to any number of your choice.If your number is exactly in between two palindromes, return the smaller number.If the number you chose IS a palindrome, return itself.Have fun!

function numPalindrome(num) {
  if (num[0]===num[num.length-1]) {
    return num;
  } else if (num[0] < num.length-1) {
    // return num.replace(num[num.length-1, num[0]])
  }
}
