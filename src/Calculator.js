function Calculator() {

}

Calculator.prototype.add = function(stringNumbers) {
  var nonNumbers = stringNumbers.replace(/(\r\n|\n|\r)/gm,",").split(',');

  var sum = 0;
  for (i = 0; i < nonNumbers.length; i++) {
  sum += Number(nonNumbers[i] || 0);
  };
  return sum;
};
