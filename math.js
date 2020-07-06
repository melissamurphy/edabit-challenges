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

//myRobin: Today, we're all lucky, because we can practice by writing code that will print all the multiplication tables from 1 to X. The format could look something like this: '1 x 1 = 1' . Have fun taking a trip down memory lane!
    function multTable(num) {
      for (var outer = num; outer > 0; outer--) {
        for (var i = 1; i <= outer; i++) {
          console.log(i + " x " + outer + " = " + i * outer);
        }
      }
    }

// myRobin: Write an Infinity Gauntlet program that randomly deletes and returns half of the elements in the input list when Thanos bounces a finger (when running the program)
    function thanos(array) {
      for (var i = array.length - 1; i > (array.length + 1) / 2; i--) {
        var randomNum = Math.floor(Math.random() * (i + 1));
        var randomItem = array.splice(randomNum, 1)[0];
      }
      return array;
    }

    console.log(thanos([2, 3, 1, 6, 5, 7]));
