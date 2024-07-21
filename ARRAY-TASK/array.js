//Write a function that takes an array and returns its length.//
function getArrayLength(arr) {
  return arr.length;
}
const sampleArray = [1, 2, 3, 4, 5, 9];
const length = getArrayLength(sampleArray);
console.log("Length of Array is:-", length);

//Write a function that adds a new element to the end of an array.//
function AddElementEnd() {
  Addarray.push("owl");
}
const Addarray = ["monkey", "donkey", "lion"];
console.log(Addarray);
AddElementEnd();
console.log(Addarray);

//Write a function that adds a new element to the beginning of an array.//
function AddElementStart() {
  start.unshift("Tiger");
}
const start = ["monkey", "donkey", "lion"];
AddElementStart();
console.log(start);

//Write a function that removes the last element from an array.//
function RemoveElementEnd() {
  Remove.pop();
}
const Remove = ["Tiger", "monkey", "donkey", "lion"];
RemoveElementEnd();
console.log("Remove last Element ", Remove);
//Write a function that removes the first element from an array.//
function RemoveElementFirst() {
  RemoveFirst.shift();
}
const RemoveFirst = ["Tiger", "monkey", "donkey", "lion"];
RemoveElementFirst();
console.log("Remove first Element ", RemoveFirst);

//Write a function that joins all elements of an array into a string.//
function joinArray(arr) {
  return arr.join(", ");
}

const fruits = ["apple", "banana", "cherry"];
const result = joinArray(fruits);
console.log(result);
//Write a function that checks if an array contains a specified element.//
function checkContains(arr, element) {
  console.log(arr.includes(element));
}
const numbers = [1, 2, 3, 4, 5];
checkContains(numbers, 6);

//Write a function that finds the index of the first occurrence of an element in an array.//
function findIndex(arr, element) {
  return arr.indexOf(element);
}

const fruit = ["apple", "banana", "cherry", "banana"];
const index1 = findIndex(fruit, "banana");
console.log("the first index number is:", index1);

//Write a function that finds the index of the last occurrence of an element in an array.
function findIndexLast(arr, element) {
  return arr.lastIndexOf(element);
}
const fruit1 = ["apple", "banana", "cherry", "banana"];
const index2 = findIndexLast(fruit1, "banana");
console.log("the last index number is:", index2);

//Write a function that reverses the order of elements in an array.//
function ArrayRevers() {
  Arr.reverse();
}
const Arr = [2, 4, 5, 8, 9, 12];
console.log(Arr);
ArrayRevers();
console.log("revers of array is:-", Arr);
//Write a function that sorts the elements of an array in ascending order.//
function sortArrayAscending(arr) {
  arr.sort();
  console.log(arr);
}
const fruites = ["banana", "apple", "cherry", "date"];
sortArrayAscending(fruites);

//Write a function that removes duplicate elements from an array.//
function removeDuplicates(arr) {
  const uniqueArray = [...new Set(arr)];
  console.log(uniqueArray);
}
const number = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(numbers);

//Write a function that returns the largest number in an array.//
function findLargestNumber(arr) {
  if (arr.length === 0) return undefined;
  const largest = Math.max(...arr);
  return largest;
}
const num = [5, 12, 3, 8, 21];
const largestNumber = findLargestNumber(num);
console.log("largestNumber is :", largestNumber);
//
function findSmallestNumber(arr) {
  if (arr.length === 0) return undefined;
  const smallest = Math.min(...arr);
  return smallest;
}
const Numbers = [5, 12, 3, 8, 1];
const smallestNumber = findSmallestNumber(Numbers);
console.log("smallestNumber is :", smallestNumber);

//Write a function that finds the sum of all elements in an array.
function sumArray(arr) {
  const total = arr.reduce((acc, num) => acc + num, 0);
  return total;
}
const Num = [1, 2, 3, 4, 5];
const sum = sumArray(Num);
console.log("sum is :", sum);

//Write a function that finds the average of all elements in an array.//

const findAverage = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (const num of arr) {
    sum += num;
  }

  return sum / arr.length;
};

const num1 = [1, 2, 3, 4, 5];
console.log("the average of all elements is :", findAverage(num1));

//Write a function that checks if all elements in an array are even.//
const areAllEven = (arr) => {
  for (const num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
};

const N = [2, 4, 6, 8];
console.log(areAllEven(N));

//Write a function that checks if all elements in an array are odd//
const areAllOdd = (arr) => {
  for (const num of arr) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};
const NUMBER = [1, 3, 5, 7];
console.log(areAllOdd(NUMBER));
//Write a function that maps each element of an array to its square.//
const mapToSquares = (arr) => {
  return arr.map(num => num * num);
};
const numarray = [1, 2, 3, 4, 5];
const squaredNumbers = mapToSquares(numarray);
console.log(squaredNumbers);

//Write a function that maps each element of an array to its cube.//
const mapToCubes = (arr) => {
  return arr.map(num => num * num * num);
};

const Arraynum = [1, 2, 3, 4, 5];
const cubedNumbers = mapToCubes(Arraynum);
console.log(cubedNumbers); 

//Write a function that concatenates two arrays.//
const concatenateArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray);

//Write a function that finds the difference between two arrays.//
const arrayDifference = (arr1, arr2) => {
  return arr1.filter(element => !arr2.includes(element));
};
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [4, 5, 6, 7, 8];
const difference = arrayDifference(Array1, Array2);
console.log(difference); 

//Write a function that sorts an array of objects based on a specified key.//
const sortByKey = (arr, key) => {
  return arr.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

const people = [
  { name: 'ram', age: 25 },
  { name: 'sudheer', age: 22 },
  { name: 'sahile', age: 27 }
];
const sortedByAge = sortByKey(people, 'age');
console.log(sortedByAge);

///Write a function that groups the elements of an array based on a specified key. //
const groupByKey = (arr, key) => {
  return arr.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};
const peron = [
  { name: 'rok', age: 25 },
  { name: 'Rohit', age: 22 },
  { name: 'Jadugar', age: 25 },
  { name: 'Jelly', age: 22 }
];

const groupedByAge = groupByKey(person, 'age');
console.log(groupedByAge);
