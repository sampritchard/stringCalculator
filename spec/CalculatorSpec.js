describe('Calculator', function() {
  var calculator;
})

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('returns 0 if an empty string is paseed in', function() {
    expect(calculator.add("")).toEqual(0);
  });

  it('returns the number shown if only one number', function() {
    expect(calculator.add("1")).toEqual(1);
    expect(calculator.add("0")).toEqual(0);
    expect(calculator.add("-1")).toEqual(-1);
    expect(calculator.add("100")).toEqual(100);
  });

  it('returns the sum of numbers if two numbers passed', function() {
    expect(calculator.add("1,6")).toEqual(7);
    expect(calculator.add("0,1")).toEqual(1);
    expect(calculator.add("-1,5")).toEqual(4);
    expect(calculator.add("100,200")).toEqual(300);
  });

  it('returns the sum from an unknown amount of numbers', function() {
    expect(calculator.add("1,6,1,1,1,1,1,1")).toEqual(13);
    expect(calculator.add("1,6,10")).toEqual(17);
  })
