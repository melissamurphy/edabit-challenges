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
