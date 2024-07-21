//Write a function that takes a string and returns its length.//
function getString(str) {
  return str.length;
}
const myString = "myName is shivam";
const length = getString(myString);
console.log("length of string is:", length);

//Write a function that converts a given string to uppercase.
function convert(value) {
  console.log(value); // before using touppercase method
  const vr = value.toUpperCase();
  console.log("toUppercase method value is :-", vr);
}
convert("shivam");

//Write a function that converts a given string to lowercase//
function converts(value) {
  console.log(value); // before using  tolowercase method
  const vr = value.toLowerCase();
  console.log("toLowercase method value is :-", vr);
}
converts("NAME IS");

//Write a function that trims whitespace from the beginning and end of a string.
function space(sp) {
  console.log("using trim() for remove whitespace");
  console.log(sp); // before trim function
  const whitSpace = sp.trim();
  console.log(whitSpace);
}
space("   hello world sir      ");

//Write a function that capitalizes the first letter of each word in a string.//
function capitalizesLetter(string) {
  const captlize = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(captlize);
}
capitalizesLetter("names");

//Write a function that replaces all occurrences of a given substring within a string.?//
function replace() {
  const orignalString = "My name is shivam"; // before replace
  console.log(orignalString);
  const s = orignalString.replace("shivam", "Nikil"); // after replace/
  console.log(s);
}
replace();

// Write a function that checks if a string starts with a given substring.//
function toCheck() {
  const orignal = "my name is gupta shiv";
  if (orignal.startsWith("my")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
toCheck();
//Write a function that checks if a string ends with a given substring.//
function toCheck1() {
  const orignal = "my name is gupta shiv";
  if (orignal.endsWith("shiv")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
toCheck1();

//Write a function that checks if a string contains a given substring.//
function contain(objs) {
  const value = "string task";
  if (value == objs) {
    console.log("given string is matching");
  } else {
    console.log("not match");
  }
}
contain("string task");
//Write a function that splits a string into an array of substrings based on a delimiter.//
function converter() {
  const splited = "firstName lastName secondName";
  const result = splited.split(" ");
  console.log(result);
}
converter();
//Write a function that joins an array of strings into a single string with a given separator.//
function joint() {
  const joinMethod = ["Akash", "prkash", "bhawesh"];
  console.log(joinMethod); // before join() method.
  const joinresult = joinMethod.join("-");
  console.log(joinresult);
}
joint();

//Write a function that repeats a given string a specified number of times.//
function repeats() {
  const repeated = "my name my is sir ";
  const repeatedResult = repeated.repeat(2);
  console.log(repeatedResult);
}
repeats();

//Write a function that extracts a substring from a string starting at a specified index and length.
function extractSubstring(str, startIndex, lengths) {
  return str.substring(startIndex, startIndex + lengths);
}
const myStrings = "welcome, wonder!";
const startIndex = 0;
const lengths = 7;
const result = extractSubstring(myStrings, startIndex, lengths);
console.log(result);

//Write a function that returns the index of the first occurrence of a substring in a string.//
function indexValue(index, substr) {
  return index.indexOf(substr);
}
const orignalString = "thanks,world!";
const subString = "world";
const indexs = indexValue(orignalString, subString);
console.log("the index value of string is:", indexs);

//Write a function that returns the index of the last occurrence of a substring in a string.//
function indexValues(ind, subs) {
  return ind.lastIndexOf(subs);
}
const indexstring = "thanks, world!";
const subsri = "world";
const ind = indexValues(indexstring, subsri);
console.log("the last index  value of string", ind);
//Write a function that checks if two strings are equal, case-sensitive.//
function checkString() {
  const firstString = "SHIVAM";
  const secondString = "shivam";
  console.log(firstString === secondString); //for case senstive/
}
checkString();

//Write a function that checks if two strings are equal, case-insensitive.//
function checkStrings() {
  const firstStrings = "SHIVAM";
  const secondStrings = "SHIVAM";
  console.log(firstStrings == secondStrings); //for case senstive/
}
checkStrings();
//Write a function that converts a string into an array of characters.//
function stringToArray() {
  const StringA = "StringTOArray";
  const res = StringA.split("");
  console.log(res);
}
stringToArray();
//Write a function that reverses a given string.//
function reverseString(str) {
  const reverS = "HELLO";
  console.log(reverS);
  const reversed = reverS.split("").reverse().join("");
  console.log(reversed);
}
reverseString();
//Write a function that counts the number of vowels in a given string.//
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const exampleString = "Welcome javascript";
console.log("the total vowels is :-", countVowels(exampleString));

//Write a function that counts the number of consonants in a given string.//
function countConsonants(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
const exampleStrings = "Welcome javascript";
console.log("the total Consonants is :-", countConsonants(exampleStrings));
//Write a function that checks if a given string is a palindrome.//
function palindrome(data) {
  let start = 0;
  let end = data.length - 1;

  while (end > start) {
    if (data[start] != data[end]) {
      console.log("This is not a palindrome.");
      return;
    }
    start++;
    end--;
  }
  console.log("This is a palindrome.");
}

const str = "level";
palindrome(str);
//Write a function that removes all non-alphabetic characters from a string.//
function removeNonAlphabetic(s) {
  let cleanedStr = "";
  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
      cleanedStr += s[i];
    }
  }

  return cleanedStr;
}

const inputStr = "Hello, World! 123";
const cleanedStr = removeNonAlphabetic(inputStr);
console.log(cleanedStr);
//Write a function that removes all non-numeric characters from a string.//
function removeNonNumeric(s) {
  let cleanedSt = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      cleanedSt += s[i];
    }
  }

  return cleanedSt;
}
const inputSt = "Hello, World! 123";
const cleanedSt = removeNonNumeric(inputSt);
console.log(cleanedSt); 
//Write a function that converts a given string to camelCase.//
function toCamelCase(str) {
  let camelCaseStr = '';
  let capitalizeNext = false;

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === ' ' || char === '-' || char === '_') {
          capitalizeNext = true;
      } else {
          if (capitalizeNext) {
              camelCaseStr += char.toUpperCase();
              capitalizeNext = false;
          } else {
              camelCase += camelCase.length === 0 ? char.toLowerCase() : char;
          }
      }
  }

  return camelCase;
} 
const input = "hello_world-this is a test";
const camelCase = toCamelCase(input);
console.log(camelCase);

//Write a function that removes duplicate characters from a string.
function removeDuplicates(input) {
  let uniqueStr = '';
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

// Example usage:
const inputStr1 = "programming";
const cleanedStr1 = removeDuplicates(inputStr1);
console.log(cleanedStr1);  // Output: progamin



