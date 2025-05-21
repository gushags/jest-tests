// capitalize.js
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
import { mergeSort } from "./merge-sort.js";

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  str = str.toString();
  const split = str.split("");
  let reverse = [];
  for (let i = str.length; i > 0; i--) {
    reverse.push(split[i - 1]);
  }
  return reverse.join("");
}

const calculator = {
  add: (a, b) => {
    calculator.notNumber(a, b);
    return a + b;
  },
  subtract: (a, b) => {
    calculator.notNumber(a, b);
    return a - b;
  },
  divide: (a, b) => {
    calculator.notNumber(a, b);
    return a / b;
  },
  multiply: (a, b) => {
    calculator.notNumber(a, b);
    return a * b;
  },
  notNumber: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operands must be numbers");
    }
  },
};

function caesarCipher(string, shift) {
  const caesar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (isNaN(shift)) {
    throw new Error("A shift factor is required to work this algorithm.");
  }
  let caesarOutput = [];
  let stringLowercase = string.toLowerCase();
  stringLowercase;
  for (const letter of stringLowercase) {
    if (checkLowerCase(letter)) {
      let index = caesar.findIndex((element) => element === letter);
      if (index + shift > 25) {
        index = index - 26;
      }
      caesarOutput.push(caesar[index + shift]);
    } else {
      caesarOutput.push(letter);
    }
  }
  caesarOutput = caesarOutput.join("");
  if (stringLowercase == string) {
    return caesarOutput;
  } else {
    return reconcileCase(caesarOutput, string);
  }
}

function reconcileCase(output, upper) {
  let upperArray = [];
  let finishedCipher = [];
  for (let i = 0; i < upper.length; i++) {
    let testedLetter = checkCase(upper[i]);
    upperArray.push(testedLetter);
  }
  for (let i = 0; i < upper.length; i++) {
    if (upperArray[i]) {
      finishedCipher[i] = output[i].toUpperCase();
    } else {
      finishedCipher[i] = output[i];
    }
  }
  return finishedCipher.join("");
}

function checkCase(char) {
  return /[A-Z]/.test(char) ? true : false;
}
function checkLowerCase(char) {
  return /[a-z]/.test(char) ? true : false;
}

function analyzeArray(arr) {
  const sortedArr = mergeSort(arr);
  const object = {
    average: arrAverage(arr),
    min: sortedArr[0],
    max: sortedArr[arr.length - 1],
    length: arr.length,
  };
  object;
  return object;
}

function arrAverage(arr) {
  let total = 0;
  for (const item of arr) {
    total = total + item;
  }
  return total / arr.length;
}
