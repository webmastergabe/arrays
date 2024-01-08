const sampleArray = [2, 4, 6, 8, 10, 12, 1, 3, 5, 7];

//////////////////PROBLEM 1////////////////////

// Make a variable called firstItem and set it equal to the first item in
// "sampleArray". Then, log it to the console.
// The expected output is 2.

let firstItem = sampleArray[0];

//console.log(firstItem)



//////////////////PROBLEM 2////////////////////

// Make a vriable called arrayLength and set it equal to the length of
// "sampleArray". Then, log it to the console.
// The expected output is 10.

let arrayLength = sampleArray.length;

//console.log(arrayLength)

//////////////////PROBLEM 3////////////////////

// Make a variable called lastItem and set it equal to the LAST item in
// "sampleArray". Then, log it to the console.
// Try to make sure you code still works even if you change the length of the
// sample array!
// The expected output is 7.

let lastItem = sampleArray[sampleArray.length - 1];

//console.log(lastItem)


//////////////////PROBLEM 4////////////////////

// Add a 42 to the end of sampleArray. Then, log the
// whole array in the console.
// The expected output is [2, 4, 6, 8, 10, 12, 1, 3, 5,  7, 42]

sampleArray.push(42);

//console.log(sampleArray)

//////////////////PROBLEM 5////////////////////

// Write code to remove the last element from sampleArray 
// (the one you added in problem 4). Log the array after you are done to make
// sure that the element has been removed
// The expected output is [2, 4, 6, 8, 10, 12, 1, 3, 5,  7]

sampleArray.pop();

//console.log(sampleArray)
//////////////////PROBLEM 6////////////////////

// Replace the first and last item in sampleArray with the number 42, then
// log it to the console.
// The expected output is [42, 4, 6, 8, 10, 12, 1, 3, 5, 42]

sampleArray.shift();
sampleArray.unshift(42);
sampleArray.pop();
sampleArray.push(42);

//console.log(sampleArray)

//////////////////PROBLEM 7////////////////////

// Make a while loop that keeps going so long as "num" is an even number.
// inside the loop, print out "num", then divide it by two.
// For example, if "num" starts at 12, your code should print:
//
// 12
// 6
// 3    (<---- stop here, because three is odd)


let num = 12;
//console.log(num);
while (num % 2 === 0) {
  num = num / 2;
 // console.log(num);
}

//////////////////PROBLEM 8////////////////////

// Using a for...of loop, add ten to each element in startArray and then push 
// each new number into the newArr array. Then, log the result.

// If startArray is [1, 2, 3, 4], the result should be [11,12,13,14]
// remember it is looping through each number, not the entire set at the whole time
const startArray = [1, 2, 3, 4];
let newArray = [];

for (const num of startArray) { //num stands for number your at as you loop thru array
  newArray.push(num + 10); //num + 10 adds to each number in the array
}
//console.log(newArray)

//////////////////PROBLEM 9////////////////////
//for loop structure = for (initialization; continue_condition; change being made)

// Fill the "numbers" array with numbers 0-31 using a for loop. Log the result.

let numbers = [];

for (let i = 0; i <= 31; i++) { //the things you want to do should go here
  numbers.push(i); //stuff to DO each time
}

//console.log(numbers);

//////////////////PROBLEM 10////////////////////

// Fill the "evens" array with even numbers 0-20 using a for loop. Log the result.
let evens = [];

for (let i = 0; i <=20; i+= 2) {
  evens.push(i);
}
//console.log(evens)

//////////////////PROBLEM 11////////////////////

// Fill the countdown array with numbers from 10 to 1 in descending order 
// using a for loop. Log the result.

let countdown = [];

for (let i = 10; i > 0; i--) {
  countdown.push(i);
}
//console.log(countdown)

//////////////////PROBLEM 12////////////////////

// Using a for loop, fill the reversedArray with the elements of originalArray,
// but in reversed order. Log the result.
// In this example, the reversedArray should be [4, 3, 2, 1]

const originalArray = [1, 2, 3, 4];
const reversedArray = [];

for (let i = 4; i <= originalArray.length; i--) {
  reversedArray.push(i);
}
//console.log(reversedArray)


/// ///////////////PROBLEM 13////////////////////

// If the given item is in the groceryList, remove it from the groceryList.
// Otherwise, do nothing. Log the final groceryList at the end.
// As the variables are set up now, the expected output would be
// ['apple', 'cherry', 'durian']

const groceryList = ['apple', 'banana', 'cherry', 'durian']
const itemToRemove = 'banana';

// Also try with itemToRemove = 'apricot' and make sure that nothing happens
// to the grocery list
groceryList.splice(1, 1, 'apricot'); 

//console.log(groceryList);

//////////////////PROBLEM 14////////////////////

// In the function below, loop through the "repeats"" array. 
// If a number is the same as the previous number in the list, add it to a sum.
// Then, log the sum

// For example:
// [1, 1, 2, 5, 2, 6, 6] -> 7
// The sum should be 7 because there are two 1's next to each other and two 6's next to each other.
// The 2's are not repeats because they're not next to each other.

let sum = 0;
const repeats = [1, 1, 2, 5, 2, 6, 6];

for (let i = 0; i < repeats.length; i++) {
  sum.push(i);
}
console.log(sum)

//////////////////PROBLEM 15////////////////////

// In the function below, inputArray is an array of numbers.
// Add the INDEXES of all positive numbers to the array called 'indexes'.
// For example:
// [1, -2, 3, 5, -8, -13, 21] -> [0, 2, 3, 6]

const inputArray = [1, -2, 3, 5, -8, -13, 21];
const indexes = [];