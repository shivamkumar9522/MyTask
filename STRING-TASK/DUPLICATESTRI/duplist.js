//Write a function that removes duplicate characters from a string.
function removeDuplicates(input) {
  let uniqueStr = "";
  let encounteredChars = new Set();

  for (let index = 0; index < input.length; index++) {
    const currentChar = input[index];
    if (!encounteredChars.has(currentChar)) {
      encounteredChars.add(currentChar);
      uniqueStr += currentChar;
    }
  }

  return uniqueStr;
}
const inputStr1 = "programming";
const cleanedStr1 = removeDuplicates(inputStr1);
console.log(cleanedStr1);

//Write a function that sorts the characters in a string in alphabetical order.//
function sortCharacters(str) {
  let charArray = Array.from(str);
  charArray.sort();
  return charArray.join("");
}
const inputStr = "programming";
const sortedStr = sortCharacters(inputStr);
console.log(sortedStr);

//Write a function that sorts the characters in a string in reverse alphabetical order.//
function sortCharactersReverse(str) {
  return str.split("").sort().reverse().join("");
}

const inpu = "programming";
const sort = sortCharactersReverse(inpu);
console.log(sort);

//Write a function that converts a given string to a number.//
function convertToNumber(str) {
  return Number(str);
}

const myInput = "1234";
const num = convertToNumber(myInput);
console.log(num);
