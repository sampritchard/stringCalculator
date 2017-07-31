function Calculator() {

}

Calculator.prototype.add = function(stringNumbers) {
  var noComma = stringNumbers.split(',');
  return Number(noComma[0] || 0) + Number(noComma[1] || 0);
};
