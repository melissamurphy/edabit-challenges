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

function fullHouse(array) {
  array.sort();
  console.log(array);
  var counter = 1;
  var counter2 = 1;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {

    }
  }
}
console.log(fullHouse(["K", "K", "A", "K", "A"]));
