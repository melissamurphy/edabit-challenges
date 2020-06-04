// Do you know what a factorial of a number is ? You can get the factorial of a number by multiplying all the numbers less than or equal to that number.As an example, 5!(5 factorial), is equal to 5 X 4 X 3 X 2 X 1 = 120.
// Would you please write a solution for Robin that returns the factorial of that number ?
function factorialNum(num) {
  for (var i = num, product = 1; i > 0; i--) {
    product = i * product;
  }
  return product;
}

console.log(factorialNum(5));
