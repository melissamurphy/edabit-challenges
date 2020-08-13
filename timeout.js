// I want this code to print out 0, 1, 2, 3 in sequential order...but it isn't. Why is that? Can you re-write this function so it does what we want it to do?

// for (var i = 0; i < 4; i++) {
// setTimeout(() => console.log(i), 0)
// }

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
