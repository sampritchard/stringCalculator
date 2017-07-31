describe('Calculator', function() {
  var calculator;
})

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('returns 0 if an empty string is paseed in', function() {
    expect(calculator.add('')).toEqual(0);
  });
