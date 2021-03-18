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
