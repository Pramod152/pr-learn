/*
Given an array "numbers" with five elements: [5, 3, 7, 1, 9]. Write a function named "findMax"
 that takes an array as an argument and returns the largest number in the array.

 //code
const findmax = function (arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findmax([5, 3, 7, 1, 9]));

const findmax1 = function (arr) {
  return Math.max(...arr);
};
console.log(findmax1([5, 3, 7, 14, 1, 9, 2]));
*/

/*
Given two arrays "a" and "b" of equal length, write a function named "mergeArrays" that
 merges the two arrays into a single array such that the resulting array contains all the
  elements from both arrays in alternating order.
  
  //code
  
  const mergeArrays = function (a, b) {
    console.log(a, b);
  
    let resArr = [];
    let i = 0;
    
    while (i < a.length) {
      resArr.push(a[i]);
      while (i < b.length) {
        resArr.push(b[i]);
        i++;
        break;
      }
    }
  
    return resArr;
  };
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
  */

/* 
Given an array of numbers, write a function named "calculateAverage" that 
calculates the average of the numbers in the array and returns it.

//code

const calculateAverage = function (arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
};
console.log(calculateAverage([1, 5, 7, 2, 8, 3]));
console.log(calculateAverage([1, 2, 3, 4, 5]));
*/

/*
Given an array of numbers, write a function named "findDuplicates" that finds all the
 duplicate elements in the array and returns them in a new array. 
 //code
 
 //One Approach

 const findDuplicates = function findDuplicates(arr) {
   let duplicates = [];
   let seen = {};
 
   for (let i = 0; i < arr.length; i++) {
     if (seen[arr[i]]) {
       duplicates.push(arr[i]);
     } else {
       seen[arr[i]] = true;
     }
   }
 
   return duplicates;
 };
 console.log(findDuplicates([1, 5, 8, 2, 6, 1, 9, 8, 2, 5]));

 //Another Approach

 const findDuplicates = function (arr) {
   let duplicate = [];
   let filteredArr = [];
   seen = {};
 
   for (let i = 0; i < arr.length; i++) {
     if (seen[arr[i]]) {
       duplicate.push(arr[i]);
     } else {
       seen[arr[i]] = true;
       filteredArr.push(arr[i]);
     }
   }
   return `Duplicate elements: [${duplicate}], Filtered Array: [${filteredArr}]`;
 };
 
 console.log(findDuplicates([1, 5, 8, 2, 6, 1, 9, 8, 2, 5]));
 console.log(findDuplicates([1, 5, 7, 2, 5, 8, 2, 3, 1]));
*/
