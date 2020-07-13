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
