function startupName(array) {
  var string = "";
  array.map(element => {
    string += element[0].toUpperCase();
  })
  return string.split('').sort().join('');
}
console.log(startupName(["Mel", "danny", "Nick"]));
