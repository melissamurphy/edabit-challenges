// https://edabit.com/challenge/niTEsddTdE4gs4YGX
// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers.Each k represents a thousand.-- >
function transformUpvotes(str) {
  const newArray = str.split(" ").map(element => {
    if (element.endsWith("k")) {
      return element.slice(0, -1) * 1000;
    } else {
      return element * 1;
    }
  })
  return newArray;
}

class fifo {
  constructor() {
    this.queue = [];
  }
  add(element) {
    this.queue.push(element);
  }
  remove(element) {
    this.queue.shift(element);
  }
}

// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (g() > f()) {
    return "g";
  }
  else {
    return "neither";
  }
}

// https://edabit.com/challenge/QWmvQsrSuQRmEN8ne
// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
  return arr.map(value => typeof value)
}

// https://edabit.com/challenge/qcw8QBqa4amN2x4q4
// function add2(x) {
//   (return x + 2;)
// }

add2 = x => x+2;


// function add3(x) {
//   return x + 3;
// }

add3 = x => x+3;

// function add5(x) {
//   return x + 5;
// }

add5 = x => x+5;

// function add7(x) {
//   return x + 7;
// }

add7 = (x) => x+7;

// function add11(x) {
//   return x + 11;
// }

add11 = (x) => x+11;

// https://edabit.com/challenge/8A9E8LdE6zXcmPX3W
// Write a function that maps files to their extension names.
// getExtension(["code.html", "code.css"])
// ➞["html", "css"]

function getExtension(arr) {
    // split string into pre- and post- period
    // return part after period
}

//Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (g() > f()) {
    return "g";
  } else return "neither"
}
