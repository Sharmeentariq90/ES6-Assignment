
document.write("Assignments of ES6");
// LET, VAR & CONST:
// 1-
// const PI = 3.14159;
// PI = 4.14;
// console.log(PI);
// Error shows in (Uncaught TypeError: Assignment to constant variable)
// 2-
// function sumOfSquares(numbers) {
//     let sum = 0;

//     for (const num of numbers) {
//         const square = num * num;
//         sum += square;
//     }

//     return sum;
// }
// const numbersArray = [1, 2, 3, 4, 5];
// const result = sumOfSquares(numbersArray);
// console.log(result);
// 3-
// const arrayOfStrings = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const firstLetter = arrayOfStrings[i][0];
//     console.log(firstLetter);
// }
// 4:
// function generateAsteriskString(n) {
//     const asterisk = '*';

//     let result = '';
//     for (let i = 0; i < n; i++) {
//         result += asterisk;
//     }

//     return result;
// }

// const asteriskString = generateAsteriskString(6);
// console.log(asteriskString);

//   5:

// function generateGreetingMessage(person) {
//     var message;

//     if (person.name && person.age) {
//         message = `Hello, ${person.name}! You are ${person.age} years old.`;
//     } else {
//         message = 'Invalid input.';
//     }

//     return message;
// }


// const personInfo = { name: 'Sharmeen', age: 30 };
// const greeting = generateGreetingMessage(personInfo);
// console.log(greeting);


// 6:

// function findMaxValue(numbers) {
//     let maxValue;

//     if (numbers.length > 0) {
//         maxValue = Math.max(...numbers);
//     } else {
//         maxValue = undefined;
//     }

//     return maxValue;
// }


// const numberArray = [15, 5, 8, 55, 15];
// const max = findMaxValue(numberArray);
// console.log(max);




// ************************************TEMPLATE STRINGS****************************************************
// // 1:

// function generateGreeting(name, age) {
//     const greeting = `Hello, ${name}! You are ${age} years old.`;
//     return greeting;
//   }
//   let msg = generateGreeting("sharmeen",30);
//   console.log(msg);

// 3:

// function createHTMLElement(tagName, text) {
//     const htmlElement = `<${tagName}>${text}</${tagName}>`;
//     return htmlElement;
//   }

//   const tagName = 'p';
//   const content = 'This is a paragraph.';
//   const element = createHTMLElement(tagName, content);
//   console.log(element);

// 4:

// function getProductInfo(product) {
//     const productInfo = `Product: ${product.name},
//     Price: $${product.price},
//     Quantity: ${product.quantity}`;
//     return productInfo;
// }

// // Example usage
// const productData = {
//     name: 'fridge',
//     price: 5999.99,
//     quantity: 1
// };

// const productInfoString = getProductInfo(productData);
// console.log(productInfoString);

// 5:
// function generateDate(date) {
//     const info = `date: ${date.day}/${ date.month }/${date.year}`;
//     return info;
// }

// const assembleDate = {
//     day: 4,
//     month: 8,
//     year: 2023,
// }
// const finalView = generateDate(assembleDate);
// console.log(finalView);

// ******DESTRUCTING***************:

// 1  :   function sumArray([num1, num2]) {
//     return num1 + num2;
// }

// const result = sumArray([5,7]);
// console.log(result);

// 2:
// function personInfo(person) {
//     const { name, age, occupation } = person;
//     return `Name:${name} Age:${age} Occupation:${occupation}`;

// }
// const getInfo={
//     name:"Sharmeen",
//     age:30,
//     occupation: "Developer"

// }
// const viewInfo = personInfo(getInfo);
// console.log(viewInfo);



// 3:

// function personName(person){
//     const{firstName,middleName,lastName}=person;
//     return `${firstName } ${middleName} ${lastName}`;
// }

// const getInfo={
//     firstName:"Sharmeen",
//     middleName:"adnan",
//     lastName:"tariq"

// }
// const finalView=personName(getInfo);
// console.log(finalView);


// DEFAULT, REST & SPREAD:

// 1-

// function addNumbers(a = 0, b = 0) {
//     return a + b;
// }

// const result1 = addNumbers(5, 3);
// const result2 = addNumbers();  
// console.log(result1);

// 2-

// function gatherArguments(...args) {
//     return args;
// }

// const result1 = gatherArguments(1, 2, 3);
// const result2 = gatherArguments("apple", "banana", "cherry", "date");

// console.log(result1);
// console.log(result2);

// 3-

// function findMaxValue(numbers) {
//     return Math.max(...numbers);
// }
// const numberArray = [10, 5, 8, 20, 15];
// const maxValue = findMaxValue(numberArray);
// console.log(maxValue);

// 4-

// function concatenateArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = concatenateArrays(array1, array2);
// console.log(concatenatedArray);

// 5:

// ARROW FUNCTIONS:

// 1:

// const getStringLength = (str) => str.length;

// const inputString = "Hello, world!";
// const length = getStringLength(inputString);
// console.log(length);

// 2:

// const multiplyNumbers = (a, b) => a * b;


// const product = multiplyNumbers(5, 5);
// console.log(product);


// 3:

// const average=(a,b)=>((a+b)/2);
// const result=average(2,2);
// console.log(result);

// 4:

// const requirdName=(name)=>`Hello ${name}`;
// const namee="Sharmeen"
// const greet=requirdName(namee);
// console.log(greet);

// 5:

// const getRandomNumber = () => Math.random();

// const randomNumber = getRandomNumber();
// console.log(randomNumber);

// *******************************// HOISTING:*****************************************
// 1:
// var varVariable = "Hello, world!";
// function printVarValue() {
//     console.log(varVariable);
// }

// printVarValue();

// 2:

// let letVariable = "Hello, world!";
// function printLetValue() {
//     console.log(letVariable);
// }

// printLetValue();

// 3:
// function printConstValue() {
//     console.log(constVariable);
// }

// const constVariable = "Hello, world!";
// printConstValue();

// 4:


// let undeclaredVariable;
// function printAssignedUndeclaredValue() {
//     console.log(undeclaredVariable);
// }

// undeclaredVariable = "Hello, world!";
// printAssignedUndeclaredValue();



// CLOSURES (WITH SCOPE & ITS BENEFITS’S):

// 1:

// function counter() {
//     let count = 0; // Counter variable declared in the outer function
    
//     function incrementAndLog() {
//         count++;
//         console.log(count);
//     }
    
//     return incrementAndLog; // Return the inner function
// }

// const incrementCounter = counter();
// incrementCounter();
// incrementCounter();



// // 2:

// function createMultiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = createMultiplier(2); // Creates a function that doubles a number
// const triple = createMultiplier(3); // Creates a function that triples a number

// console.log(double(5)); // Output will be 10 (5 * 2)
// console.log(triple(7)); // Output will be 21 (7 * 3)

// // 3:

// function secretMessage(secret) {
//     return function (message) {
//         console.log(`Secret: ${secret}, Message: ${message}`);
//     };
// }

// const shareSecret = secretMessage("The secret is out!"); 

// shareSecret("Hello, world!"); 
// shareSecret("How's it going?");

// 4:

function calculate(num1, num2) {
    return {
        add: function() {
            return num1 + num2;
        },
        multiply: function() {
            return num1 * num2;
        }
    };
}

const calculator = calculate(5, 7);

console.log(calculator.add());
console.log(calculator.multiply());














