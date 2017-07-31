describe('Calculator', function() {
  var calculator;
})

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('returns 0 if an empty string is paseed in', function() {
    expect(calculator.add('')).toEqual(0);
  });

  it('returns the number shown if only one number', function() {
    expect(calculator.add(1)).toEqual(1);
    expect(calculator.add(0)).toEqual(0);
    expect(calculator.add(-1)).toEqual(-1);
    expect(calculator.add(100)).toEqual(100);
  })
