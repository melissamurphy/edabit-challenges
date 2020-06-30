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
