// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('returns true for valid phone formats', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(800) 555-1234')).toBe(true);
});

test('returns false for invalid phone formats', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
  expect(isPhoneNumber('phone')).toBe(false);
});


test('returns true for valid emails', () => {
  expect( isEmail('user@example.com')).toBe(true);
  expect( isEmail('first.last@domain.co')).toBe(true);
});

test('returns false for invalid emails', () => {
  expect( isEmail('user@@example.com')).toBe(false);
  expect( isEmail('no-at-symbol.com')).toBe(false);
});


test('returns true for valid passwords', () => {
  expect( isStrongPassword('Abc123_')).toBe(true);
  expect( isStrongPassword('GoodPass1')).toBe(true);
});

test('returns false for invalid passwords', () => {
  // too short
  expect( isStrongPassword('a1')).toBe(false);
  // starts with non-letter
  expect( isStrongPassword('1Password')).toBe(false);
});


test('returns true for valid dates', () => {
  expect( isDate('01/31/2025')).toBe(true);
  expect( isDate('12/01/1999')).toBe(true);
});

test(' returns false for invalid dates', () => {
  // wrong format
  expect( isDate('2025-01-31')).toBe(false);
  // invalid month/day
  expect( isDate('13/40/2025')).toBe(false);
});


test('isHexColor returns true for valid hex colors', () => {
  expect( isHexColor('#FFF')).toBe(true);
  expect( isHexColor('#123abc')).toBe(true);
});

test('isHexColor returns false for invalid hex colors', () => {
  // missing '#'
  expect( isHexColor('123abc')).toBe(false);
  // wrong length
  expect( isHexColor('#1234')).toBe(false);
});
