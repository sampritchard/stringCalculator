function Calculator() {

}

Calculator.prototype.add = function(stringNumbers) {
  var replaceNewLines = stringNumbers.replace(/(\r\n|\n|\r)/gm,",");
  var noComma = replaceNewLines.split(',');
  var sum = 0;
  for (i = 0; i < noComma.length; i++) {
  sum += Number(noComma[i] || 0);
  };
  return sum;
};
