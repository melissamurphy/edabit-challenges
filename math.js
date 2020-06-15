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

function fizzBuzzBuzz(num1, num2) {
  for(var x = num1; num1 <= num2; num1++) {
    if(num1%3===0){
      console.log("Fizz");
    } else if (num1%5===0) {
      console.log("Buzz");
    } else if (num1%7===0) {
      console.log("Fuzz");
    }
  }
}
