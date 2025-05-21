import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./jest-testing.js";

// capitalize tests
// test("returns first character capitalized", () => {
//   expect(capitalize("string")).toBe("String");
// });
// test("capitalize any word", () => {
//   expect(capitalize("grand")).toBe("Grand");
// });

// test("returns all other characters lowercase", () => {
//   expect(capitalize("string")).not.toBe("STRING");
// });

// test("correct if all characters are uppercase", () => {
//   expect(capitalize("HUNGER")).toBe("Hunger");
// });

// reverseString tests
// test("returns a string", () => {
//   expect(reverseString("String")).toEqual(expect.any(String));
// });

// test("returns a reversed string", () => {
//   expect(reverseString("Hello world!")).toBe("!dlrow olleH");
// });

// test("works with numbers", () => {
//   expect(reverseString(1234567)).toBe("7654321");
// });

// calculator tests
// test("returns a number", () => {
//   expect(calculator.add(1, 2)).toEqual(expect.any(Number));
// });

// test("returns two numbers added correctly", () => {
//   expect(calculator.add(1, 2)).toBe(3);
// });

// test("returns two non-integers added correctly", () => {
//   expect(calculator.add(1.1, 2.5)).toBe(3.6);
// });

// test("returns two numbers subtracted", () => {
//   expect(calculator.subtract(5, 3)).toBe(2);
// });

// test("returns two numbers divided", () => {
//   expect(calculator.divide(10, 2)).toBe(5);
// });

// test("returns two numbers multipled", () => {
//   expect(calculator.multiply(7, 9)).toBe(63);
// });

// test("throws error if NaN", () => {
//   expect(() => {
//     calculator.add("Hi", "There");
//   }).toThrow();
// });
// test("throws error if NaN", () => {
//   expect(() => {
//     calculator.subtract("Hi", "There");
//   }).toThrow();
// });
// test("throws error if NaN", () => {
//   expect(() => {
//     calculator.multiply("Hi", "There");
//   }).toThrow();
// });
// test("throws error if NaN", () => {
//   expect(() => {
//     calculator.divide("Hi", "There");
//   }).toThrow();
// });

// caesarCipher
// test("return a string", () => {
//   expect(caesarCipher("testing", 1)).toEqual(expect.any(String));
// });

// test("have a shift factor", () => {
//   expect(() => {
//     caesarCipher("Shift");
//   }).toThrow();
// });

// test("give correct cipher with lowercase", () => {
//   expect(caesarCipher("abc", 3)).toBe("def");
// });

// test("give correct cipher with mixed capitalization", () => {
//   expect(caesarCipher("aBc", 3)).toBe("dEf");
// });

// test("wrapping from z to a", () => {
//   expect(caesarCipher("xyz", 3)).toBe("abc");
// });

// test("case preservation", () => {
//   expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
// });

// test("punctuation", () => {
//   expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
// });
