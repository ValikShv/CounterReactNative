const {plus, minus} = require("./src/helpers/CounterFunc");

test('Function plus "1 + 1"', () => {
  expect(plus(1)).toBe(2);
});

test('Function plus "0 - 1"', () => {
  expect(minus(0)).toBe(-1);
});
