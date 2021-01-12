// Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
  return arr.join(''); // do not forget quotes as an argument or else JS will put commas in your returned string
}
// Create a function which returns the number of true values there are in an array.
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count = count + 1;
    }
  }
  return count;
}

// Robin team recently interviewed a former software engineer at Amazon and was able to get some of the actual interview questions asked in the last 5 years.
// You are given an array of[j1, j2, j3, j4, j5, jn …, k1, k2, k3, k4, k5, kn], how would you arrange the given array to[j1, k1, j2, k2, …]?

function resortArray(array) {
  var newArray = array.splice(0, array.length / 2);
  var jointArray = [];
  for (var i = 0; i < array.length; i++) {
    jointArray.push(newArray[i], array[i]);
  }
  return jointArray;
}
console.log(resortArray(["j1", "j2", "j3", "j4", "j5", "k1", "k2", "k3", "k4", "k5"]));

// Write a function that, when given a list of integers, prints the pair of numbers with the shortest number of steps in between. In this case, you can assume that the array of points is already sorted. For example, if S = {1, 3, 4, 8, 13, 17, 20} is given, the result will be (3, 4).

function shortestStep(array) {
  var shortestPoints = "(" + array[0] + ", " + array[1] + ")";
  var leastDiff = array[1] - array[0];
  for (var i = 1; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] < leastDiff) {
      leastDiff = array[i + 1] - array[i];
      shortestPoints = "(" + array[i] + ", " + array[i + 1] + ")";
    }
  }
  return shortestPoints;
}

console.log(shortestStep([1, 3, 4, 8, 13, 17, 20]))

function isMagic(array){
  for(var i=0; i < array.length - 1; i++){
    if (array[i].reduce((a, b) => a + b, 0)!==array[i+1].reduce((a, b) => a + b, 0)){
      return false;
    }
    if(array[0][i] + array[1][i] + array[2][i] !== array[0][i+1] + array[1][i+1] + array[2][i+1]){
      return false;
    }
  }
  return true;
}

console.log(isMagic([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

console.log(isMagic([
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
]));

// myRobin: You've been practicing for an upcoming poker tournament. In terms of how to play the game, you're all set. But don't you want to impress everyone with some fancy deck shuffling? You can practice by creating a function that shuffles an array of items.
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var valueToShuffle = array[i];
    var randomValue = array[randomIndex];
    array[i] = randomValue;
    array[randomIndex] = valueToShuffle;
  }
  return array;
}
console.log(shuffleArray(letterArray));

// myRobin: Please write a function that returns true if your order is eligible for free shipping and false if it is not.
function freeShipping(object) {
  var sum = 0;
  for (const property in object) {
    sum = sum + object[property]
  }
  return (sum >= 30)
}
console.log(freeShipping({ "Pens": 4.99, "Notebook": 3.99 }))
console.log(freeShipping({ "Laptop": 999.99 }))

// myRobin: Each term in the Fibonacci sequence is the sum of the two preceding terms. If you start with 1 and 2, this sequence is:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

What is the total number of all even numbers in the Fibonacci sequence that are less than 4, 000, 000 ?
function fibonacci() {
  var array = [1, 2];
  var arraySum = 3;
  var count = 1;
  for (var i = 0; arraySum < 4000000; i++) {
    array.push(array[i] + array[i + 1]);
    arraySum = arraySum + array[i] + array[i + 1];
    if (array[i + 2] % 2 == 0) {
      count++;
    }
  }
  return count;
}

console.log(fibonacci());

// You and your friend go out to eat. You order dinner and she orders dessert. You decide to split the bill - you pay for the food items and she pays only for the dessert items.
//If you have two arrays, one with the type of dishes ordered and one with the corresponding price, create a function that returns an array where the first element is the amount that YOU pay and the second element is that amount that YOUR FRIEND pays

function splitTheBill(array1, array2) {
  var myPay = 0;
  var friendPay = 0;
  for(var i=0; i < array1.length; i++){
    if(array1[i]==="D") {
      friendPay = friendPay + array2[i];
    } else if (array1[i]==="F") {
      myPay = myPay + array2[i];
    }
  }
  return [myPay, friendPay];
}

// Write a function that returns the number of users who are online in your slack channel. Please include the following features:
function whoIsOnline(array) {
  if (!array[0]) {
    return "There is nobody online."
  } else if (!array[1]) {
    return array[0] + " online."
  } else if (!array[2]) {
    return array[0] + " and " + array[1] + " are online."
  }
  else return array[0] + ", " + array[1] + ", " + "and " + (array.length - 2) + " more are online."
}

console.log(whoIsOnline([]))
console.log(whoIsOnline(["Melissa", "Tiffany"]))
console.log(whoIsOnline(["Melissa", "Tiffany", "Vlad"]))

// Return first value of array
function getFirstValue(array){
  return array[0];
}


// Given an array of women and an array of men, either: Return "sizes don't match" if the two arrays have different sizes. If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
function zipIt(women, men) {
  let newArray = [];
  if(women.length === men.length){
    for(var i=0; i<women.length; i++){
      newArray.push([women[i], men[i]]);
    }
    return newArray;
  }
  else {
    return "sizes don't match"
  }

// Write a function to reverse an array.
function reverse(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i])
  }
  return newArray;

}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// Given two arguments, return an array which contains these two arguments. https://edabit.com/challenge/BFnsRqe8PFvEwcRNt
  function makePair(num1, num2) {
    let array = [];
    array.push(num1);
    array.push(num2);
    return array;
  }
// Burglary 01
  function calculateLosses(obj) {
    const array = Object.values(obj);
    const stolen = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    if (stolen === 0) {
      return "Lucky you!"
    } else {
      return stolen;
    }
  }

// Burglary 02
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.
// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

  function mostExpensiveItem(obj) {
    var highestValue = null;
    var highestItem = null;
    for (const property in obj) {
      if (obj[property] > highestValue) {
        highestValue = obj[property];
        highestItem = property;
      }
    }
    return highestItem;
  }

// Burglary 03
  function findIt(obj, name) {
    if (obj.hasOwnProperty(name)) {
      return "" + name + " is gone..."
    }
    else {
      return "" + name + " is here!"
    }
  }

// Burglary 04
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }

// Burglary 05
  function thirdMostExpensive(obj) {
  let values = Object.values(obj);
  values.sort();
  let third = values[2]
  for (let key in obj) {
    if (obj[key] == 2) {
      return key;
    }
  }
}

// Burglary Series 06
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.
  function convertToNumber(obj) {
    for (let key in obj) {
      obj[key] = Number(obj[key]);
    }
    return obj;
  }

  // Burglary Series 06
  // You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.
  function convertToNumber(obj) {
    var obj2 = {};
    for (var prop in obj) {
      obj2[prop] = parseFloat(obj[prop]);
    }
    return obj2;
  }

// Burglary Series 07
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
function makeCopy(obj) {
  let objCopy = Object.assign({}, obj);
  return objCopy;
  }

// Burglary Series 08
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.
  function removeEntry(obj, itemName) {
    let objCopy = Object.assign({}, obj);
    delete objCopy[itemName];
    return objCopy;
  }

// Burglary Series 09 Filter Values
//  Given an object with a list of the stolen items, return a copy of that list without the values below 5000.
function filterValues(obj) {
    let objCopy = {};
    for (let key in obj) {
      if (obj[key] >= 5000) {
        objCopy[key] = obj[key];
      }
    }
    return objCopy;
  }

// Burglary Series 10 Calculate Difference
// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.
// https://edabit.com/user/8Z3dkvWBqtrMEE48N
  function calculateDifference(obj, limit) {
    let sum = Object.values(obj).reduce((accumulator, currentValue) => accumulator + currentValue)
    return sum - limit;
  function calculateDifference(obj, limit) {
    let sumValue = 0;
    for (let key in obj) {
      sumValue = sumValue + obj[key];
    }
    return sumValue - limit;
  }

// Burglary Series (11): Say What
// Given an object with always the exact same 3 keys, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string
    function sayWhat(obj) {
      let array = Object.values(obj);
      array.push(array[1]);
      return array.join(" ");
    }

// Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
    function getVodkaBottle(obj, num) {
      // filter to Rammstein-only array and loop through that array until matching number is found, then return the key name
      for(let key in obj){
        if(num === obj[key] && key.includes("Rammstein")){
          return key;
        }
      }
    }

// Burglary Series (13): Sort That List
// The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".
// Given an object with the stolen items, return a new object with the list in reverse alphabetical order.
    function sortList(obj) {
      // create array of keys of given obj with Object.keys(obj)
      // put keys of given obj into alphabetical order with sort method for strings
      // create a new empty object
      // loop through the array of alphabetized keys starting at the END, signified by array.length (i.e. at the alphabetically last letter)
      // at each index, add a property to newObj with array[index] as the key and obj[array][index] as the property value
      // newObj will have the given obj/array's alphabetically last key as the first, with the property value assigned as the obj[key], where key is array[index] and property is obj[array][index]
    }

// Burglary Series (14): Adjectives Total
// Count the total amount of adjectives used. Given an object with a list of adjectives, return the total amount of adjectives used.
    function totalAmountAdjectives(obj) {
      return Object.keys(obj).length;
    }

// Burglary Series (15)
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.
    function countNumberOfOccurrences(obj) {
      let newObj = {};
      for (let key in obj) {
        // if (newObj.hasOwnProperty(obj[key])) {
        //   newObj[obj[key]]++;
        // } else {
        //   newObj[obj[key]] = 1;
        // }
        newObj.hasOwnProperty(obj[key]) ? newObj[obj[key]]++ : newObj[obj[key]] = 1;
      }
      return newObj;
    }

// Burglary Series (16):
function determineWhoCursedTheMost(obj) {
  let innerObjsArray = Object.values(obj);
  // [{me:10, spouse: 5}, {}, {}]
	// let reducer = one variable to track total sum of all first and one to track the second's
  // innerObjsArray.reduce(reducer)

  let meSum = 0;
  let spouseSum = 0;
  for (index = 0; index < innerObjsArray.length; index++) {
    meSum = meSum + innerObjsArray[index].me;
    spouseSum = spouseSum + innerObjsArray[index].spouse;
  }
  // if(meSum>spouseSum){
  //   return "ME!";
  // } else if(spouseSum>meSum){
  //   return "SPOUSE!"
  // } else {
  //   return "DRAW!"
  // }

  return meSum > spouseSum ? "ME!" : spouseSum > meSum ? "SPOUSE!" : "DRAW!"
}

// Burglary Series(17): Who is the Winner ?
// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.
// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.
// Keep track of my total wins in one variable and spouse's wins in another variable
// Access entries (first-nested object)
// Access each entry's entries to find the 'winner' for that win and increment my/spouse's variable accordingly
// * Winner is found my comparing first and second entries for higher value; if first is higher, I win; if second higher, spouse wins; if equal, it's a draw
// After looping through each entry's entries, compare my total wins variable to spouse's, then return the winner

    function determineWinnerOfFight(obj) {
      let myWins=0; spouseWins=0;
      // let array = Object.values(obj); returns an array containing the inputted object's *own properties* (in contrast to the prototype's properties, as included in a for-in)
      function roundWinner(obj){
        if(obj.me > obj.spouse){
          myWins++;
        } else if (obj.spouse > obj.me){
          spouseWins++;
        }
      // obj.me > obj.spouse ? myWins++ : obj.spouse > obj.me ? spouseWins++
      }
      Object.values(obj).array.forEach(roundWinner);

      // if(myWins > spouseWins) {
      //   return "ME!"
      // } else if(spouseWins > myWins) {
      //   return "SPOUSE!"
      // } else {
      //   return "NOBODY!"
      // }

      return myWins > spouseWins ? "ME!" : spouseWins > myWins ? "SPOUSE!" : "NOBODY!";

    }

// Burglary Series(19): Prevent Changes
// The police sends you an electronic statement for you to sign.As you begin to sign, an error pops up.Apparently, they sent you a protected document.
// This challenge is a bit different as the function you are given already contains some code that you should not change or remove.Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.
function preventChanges(obj) {
      // write your code here
      // don't use a return statement

  Object.freeze(obj);
      // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}

// Burglary Series(20): Sign Your Name
// The police send you the electronic statement again for you to sign.This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well.Unfortunately, the document is still protected against new entries...
// This challenge is a bit different as the function you are given already contains some code that you should not change or remove.Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

function signYourName(obj) {
      // write your code here
      // don't use a return statement
      Object.seal(obj);

      // DON'T CHANGE OR REMOVE THE LINES BELOW
      obj.yourSignature = "Whatever";
      obj.spouseSignature = "Nice Try"
      return obj;
}

    // Burglary Series(21): Sign Your Name Again
    // It's the police again. They need more signatures. You should also sign each room list separately. However, the document they sent is incomplete as there is only one room present. As a good citizen that you are, you sign it nevertheless.

    // This challenge is a bit different as the function you are given already contains some code that you should not change or remove.Also, don't use a return statement, it is already included.

    // The function receives an object with one nested object as an argument.Your task is:

    // on the root object: prevent any kind of changes.
    // on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.

    const obj = {
      kitchen: {
        knives: 500,
        stereo: 200,
        signature: ""
      },
      signature: "Rocky Balboa"
    }

    function signAgain(obj) {
      // write your code here
      // don't use a return statement
      Object.preventExtensions(obj);

      // DON'T CHANGE OR REMOVE THE LINES BELOW
      obj.signature = "Terminator"
      obj.extraProperty = "not possible"
      obj.kitchen.piano = 1000
      obj.kitchen.signature = "Rocky Balboa"
      return obj
    }
