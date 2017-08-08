function Calculator() {
}

Calculator.prototype.add = function(stringNumbers) {
  var noComma = stringNumbers.split(',');
  console.log(noComma)
  var sum = 0;
  for (i = 0; i < noComma.length; i++) {
  sum += Number(noComma[i] || 0);
  };
  return sum;
};
