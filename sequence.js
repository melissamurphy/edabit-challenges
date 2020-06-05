// Straight Digital Numbers
// "Not Straight" if n is lower than 100 or if its digits are not an arithmetic sequence.
// "Trivial Straight" if n has a single repeating digit.
// An integer being the step of the sequence if the n digits are a straight arithmetic sequence.

function straightDigital(number) {
  if (number < 100) {
    return "Not Straight";
  }
  number = number + "";
  var difference = number[1] - number[0];
  // convert number to string in order to return digits by index

  for (var i = 1; i + 1 < number.length; i++) {
    if (difference !== number[i + 1] - number[i]) {
      return "Not Straight";
    }
  }
  if (difference == 0) {
    return "Trivial Straight";
  }
  return difference;
}

    // check difference between 0th and 1st digits
    // if difference is 0, increment index and check for next difference
    // ("not straight" if not 0, "trivial straight" if all 0)
    // if difference is >0, increment index and check for next difference
    // ("not straight" if different difference; return difference if same difference)

    //https://edabit.com/challenge/WMorR7e2z3AkoesJC
