function Calculator() {

}

Calculator.prototype.add = function(stringNumbers) {
  return Number(stringNumbers || 0);
};
