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


//Myrobin
//Write a function that accepts a positive number X.
//The function should console log a pyramid shape with X levels using the #(Twitter's invention) character. Make sure the pyramid has spaces on both the left and right hand sides

function pyramid(num) {
  for (var x = 1; x <= num; x = x + 2) {
    console.log(" ".repeat((num - x) / 2) + "#".repeat(x));
  }
}
