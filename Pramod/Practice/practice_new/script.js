/////////////////////////////
//        Array Methods
const arr = [1, 2, 3, 4, 5, 6];
const arr4 = [7, 8, 9, 10, 11];
const arr5 = [12, 13, 14, 15];
console.log(arr); //[1, 2, 3, 4, 5, 6]

// To reverse an Array
console.log(arr.reverse()); //[6, 5, 4, 3, 2, 1]

// To convert array into string
console.log(arr.join("")); //654321

//To sort an array into ascending order
arr.sort((a, b) => a - b);
console.log(arr); //[1, 2, 3, 4, 5, 6]

//To do some operation in each element of an array
const arr1 = arr.map((el) => el * 5);
console.log(arr1); //[5, 10, 15, 20, 25, 30]

//To iterate an array
arr.forEach((a) => console.log(a));
//  1
//  2
//  3
//  4
//  5
//  6

//To add element into array
arr.push(7);
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]

//To delete an element from array
console.log(arr.pop()); //7

//To get some portion of an array
console.log(arr.slice(0, 3)); //[1, 2, 3, 4, 5]
//i.e. it takes from index 0 to 4 exludes 5 and includes 0 i.e. 0,1,2

//To add multiple array into single array
console.log(arr.concat(arr4, arr5)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//            Object Methods

const obj = {
  first: {
    fName: "Pramod",
    lName: "Ghimire",
    age: 21,
  },
  second: {
    fName: "Rajesh",
    lName: "pandey",
    age: 22,
  },
  myFunction() {
    console.log(`${this.first.fName} is a good boy`);
  },
  array: [1, 2, 3, 4, 5, 6],
  1: "Amazing",
};

// console.log(muFunc());
console.log(obj.first);
obj.myFunction();
console.log(obj.array);

for (const [, value] of Object.entries(obj.first)) {
  console.log(value);
}

const person = {
  name: "John",
  age: 30,
  gender: "male",
};

for (let property in person) {
  console.log(property + ": " + person[property]);
}

const myArray = [1, 2, 3, 4, 5];

for (let value of myArray) {
  console.log(value);
}

//Use of dot and bracket notation
//dot
console.log(obj.first.fName);
//bracket
console.log(obj[6 - 5]); //return 1 i.e. 1 is the property of obj

//We use dot when we have to access property of an object using property name
//We use bracket when we have to get the property name by using expression which returns that mathches the property of an object
