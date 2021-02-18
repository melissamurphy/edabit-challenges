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


//myRobin: Beginner programmer John Doe wants to make a program that adds and outputs each positive digit entered by the user (range is int). For instance, the result of 5528 is 20 and the result of 6714283 is 31.
    function addDigits(num) {
      var total = 0;

      for (var i = 0; i < num.toString().length; i++) {
        total = total + num.toString()[i] * 1

      }
      return total;
    }
    console.log(addDigits(5528));

// myRobin:  It looks like you just became a freelancer and snagged your first client. Unfortunately, they came to you with NO design and NO idea on what colors they want to use. Why don't you come up with a function that returns a random hexadecimal color code so you don't have to think about it either.
    function randomColor() {
      var hexadecimal = "#";
      var values = "ABCDEF0123456789";
      for (var i = 0; i < 6; i++) {
        var randomPick = Math.floor(Math.random() * 16); // picks index for the set of values, from 0th to 15th value
        hexadecimal = hexadecimal + values[randomPick];
      }
      return hexadecimal;
    }

    console.log(randomColor());

// myRobin: Write an Infinity Gauntlet program that randomly deletes and returns half of the elements in the input list when Thanos bounces a finger (when running the program)
    function thanos(array) {
      for (var i = array.length - 1; i > (array.length + 1) / 2; i--) {
        var randomNum = Math.floor(Math.random() * (i + 1));
        var randomItem = array.splice(randomNum, 1)[0];
      }
      return array;
    }

    console.log(thanos([2, 3, 1, 6, 5, 7]));


// Today's prompt is simple - write a function to determine how many days are left until Christmas

    function daysToChristmas() {
      const christmasTime = new Date("2020, 11, 25").getTime();
      var today = new Date().getTime();

      var msDifference = christmasTime - today;
      var daysDifference = msDifference / 8.64e7;
      return daysDifference;
    }
    console.log(daysToChristmas());

    //Palindromes come up a lot during technical interviews. A numerical palindrome is a number that reads the same in reverse as it reads normally. Can you remember how to write a function that returns the closest palindrome to any number of your choice? If your number is exactly in between two palindromes, return the smaller number. If the number you chose IS a palindrome, return itself. Have fun!

    function palindrome(num)
    function reverse(digits) {
      var reversed = '';
      digits = digits + '';
      for(var i=digits.length-1; i >=0; i--){
        reversed = reversed + digits[i];
      }
    }
    {
      for(var i=1; i<10; i++) {
        if
      }
    }

// myRobin
// Sheltered at home, you are so bored out of your mind that you start thinking about palindromes.A palindrome, in our case, is a number that reads the same in reverse as it reads normally.Robin challenges you to write a function that returns the closest palindrome to any number of your choice.If your number is exactly in between two palindromes, return the smaller number.If the number you chose IS a palindrome, return itself.Have fun!

function numPalindrome(num) {
  if (num[0]===num[num.length-1]) {
    return num;
  } else if (num[0] < num.length-1) {
    // return num.replace(num[num.length-1, num[0]])
  }
}

// perimeter
    function findPerimeter(length, width) {
      return length * 2 + width * 2;
    }


const calculatorObj = {
  add(num1, num2) {
    return num1 + num2;
  }
}

// https://edabit.com/challenge/YMWDcSuYwYvve3HZj
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.

    function calculateFuel(n) {
      return (n * 10 < 100 ? 100 : n * 10)
    }

// https://edabit.com/challenge/HwFtgwoW2qbQnoD6s
    // Point class
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

    }
