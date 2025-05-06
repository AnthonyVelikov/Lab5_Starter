// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber returns true for valid phone formats', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('(800) 555-1234')).toBe(true);
});

test('isPhoneNumber returns false for invalid phone formats', () => {
  expect(functions.isPhoneNumber('1234567')).toBe(false);
  expect(functions.isPhoneNumber('phone')).toBe(false);
});


test('isEmail returns true for valid emails', () => {
  expect(functions.isEmail('user@example.com')).toBe(true);
  expect(functions.isEmail('first.last@domain.co')).toBe(true);
});

test('isEmail returns false for invalid emails', () => {
  expect(functions.isEmail('user@@example.com')).toBe(false);
  expect(functions.isEmail('no-at-symbol.com')).toBe(false);
});


test('isStrongPassword returns true for valid passwords', () => {
  expect(functions.isStrongPassword('Abc123_')).toBe(true);
  expect(functions.isStrongPassword('GoodPass1')).toBe(true);
});

test('isStrongPassword returns false for invalid passwords', () => {
  // too short
  expect(functions.isStrongPassword('a1')).toBe(false);
  // starts with non-letter
  expect(functions.isStrongPassword('1Password')).toBe(false);
});


test('isDate returns true for valid dates', () => {
  expect(functions.isDate('01/31/2025')).toBe(true);
  expect(functions.isDate('12/01/1999')).toBe(true);
});

test('isDate returns false for invalid dates', () => {
  // wrong format
  expect(functions.isDate('2025-01-31')).toBe(false);
  // invalid month/day
  expect(functions.isDate('13/40/2025')).toBe(false);
});


test('isHexColor returns true for valid hex colors', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
  expect(functions.isHexColor('#123abc')).toBe(true);
});

test('isHexColor returns false for invalid hex colors', () => {
  // missing '#'
  expect(functions.isHexColor('123abc')).toBe(false);
  // wrong length
  expect(functions.isHexColor('#1234')).toBe(false);
});
