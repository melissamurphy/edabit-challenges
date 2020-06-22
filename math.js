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


function fizzBuzzFuzz(num1, num2) {
  for(var x = num1; num1 <= num2; num1++) {
    if(num1%3===0){
      console.log("Fizz");
    } else if (num1%5===0) {
      console.log("Buzz");
    } else if (num1%7===0) {
      console.log("Fuzz");
    }


//Myrobin
//Write a function that accepts a positive number X.
//The function should console log a pyramid shape with X levels using the #(Twitter's invention) character. Make sure the pyramid has spaces on both the left and right hand sides

function pyramid(num) {
  for (var x = 1; x <= num; x = x + 2) {
    console.log(" ".repeat((num - x) / 2) + "#".repeat(x));

  }
}

//https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function remainder(num1, num2) {
  return num1 % num2;
}

    function daysToFreedom(date1, date2) {
      return date2 - date1;
    }

    // if (date.month == 4 || date.month == 6 || date.month == 9 || date.month == 11) {
    //   return date.month * 30;
    // } else if (date.month == 2) {
    //   return 28
    // } else {
    //   return
    // }
    // console.log(daysToFreedom([month: 6, day: 21], [month: 10, day: 1]))
