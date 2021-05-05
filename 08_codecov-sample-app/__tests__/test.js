'use strict';

const printName = require('../build/index');

test('make sure the first name plus the last name equal the full name', () => {
  expect(printName("Hanna", "Baum")).toBe("Hanna Baum");
});