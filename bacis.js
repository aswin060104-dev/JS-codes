// console.log(10 + true); //11
// console.log(10 + null); //10 + 0
//  true - 1, false - 0, undefined - NaN, null - 0
/*
Boolean : 
Excpet null, undefined, 0, {}, '' - These are false
When Boolean()
*/
// console.log(Boolean({}));
// console 2009 - Douglas crockford - oops and JSON
//cliend side scripting, interpreted programming language - v8 engine
// server side - node js
/**
 * dynamically typed, event trigger programming, asynchronous, single page application,
 * object based scripting
 * Use: angular, react, vueJs
 * react native supports - Both mobile and desktop
 * Electron - desktop
 * 
 * script tag must be provided last of the body
 * Because it will make more time for loading
 * 
 * same script tag can't contains both external and internal script
 * 
 * variable declaration:
 * $ _ a A
 * 
 * default value is undefined
 * var = 5;
 * var = 10;
 * let variable can't be redeclare
 * const can't redecalre and reassign
 * 
 * printing statements:
 * alert()
 * console.log()
 * document.write() - directly writes value in DOM
 * documentWriteln()
 * confirm() - it is a alert, have cancel button as extra
 * prompt() - acts as alert with a box to enter value
 * console.error()
 * console.warn()
 * console.clear() - clears all the previous logs
 * 
 * Data Types:
 * primitive - number, string, boolean, undefined
 * non-primitive - object, array, function ,date
 * 
 * PRIMITVE:
 * var a = 120 
 * 
 *null - empty value

 Non PRIMITIVE: reference type
 Array - stores multiple value

 Object - have property and Behaviour - real world entity
 key value pair

 Operators
 post increment 
 subsitute -> operation -> increment 
 pre increment 
 subsitute and increment then performs operation

 strict not equal 
 same value then compares data type if same then false;
 dif data type then true

 console.log(50 !== '50'); // true;
 console.log(50 != '50'); // false;

 type conversion

 implict

 string + anything is string
 
 control statement 

 functions - calling the needed action to perform

 default parameters
 return type, non return type
 scope

 browser - window, alert(), prompt()
 server (node js) - global 

 when we call a property in a object which is not present in the object, then it will create that property and assign undefined. Will not through reference error

 Ex. let school = {
    name : "KCET"
 }

 school.address will be undefined


 Scope :
 When a variable not present in the current scope, then it will search in the outer scope

 function type:

 Named, anonymous, arrow function

 arrow function doesn't need brackets and return if it has only one statement, need no parenthesis if it has only one params.

 Higher order Function
 If a function is passed as argument, then it calls higher order function.
 The passed function is called callback function.

 function fun1(){
 }

 function fun2(fun1) -- fun2 - higher order, fun1 -call back
 note: reference is enough for passing a function as argument

hoisting:

temporary dead zone - const, let

named functions are hoisted

curring

passing arguments as chaining like add(10)(20)

IIFE, closure

immediately invoked function expression - memory will be cleared after execution

Non-primitives are stored in heap memory
Spread operator :
 */
// let a = [1,2,3]
// let b = ["hi", "bro"]
// let c = [...a, ...b] //shallow copy only for the first set valuess
// console.log(c);

// let student = {
//    name : "Aswin",
//    additional : {
//       city : "madurai"
//    }
// }

// let newStudent = {...student, name : "Alwin"}
// newStudent.name = "Arul"
// newStudent.additional.city = "New" // same reference
// console.log(student);
// console.log(newStudent);

// rest parameter:
// This will be last parameter
function add(a,b,...rest){
   console.log(a,b,rest);
}
// add(1,2,3,4,5)

/**
 * Destructer
 * let a = [1,2,3,4]
 * let [a,b,c,d] = a
 * let [x,y,...remaining] = a
 */
//   let a = [1,2,3,4]
//   let [x,y,...remaining] = a // rest parameter

//   console.log(x,y,remaining);
  
//array functions:
/**
 * pop - removes last element
 * push  - inserts at last - more than one elements can be added
 * shift - removes first element
 * unshift - adds at first
 * concat - used to get shallow copy before shallow copy
 * let arr1 = [].concat(1,2,3)
 * let arr2 = arr1.concat();
 * 
 * Slice - empty params - shallow copy
 * (start, end - 1) or (start) 
 * 
 * flat() - returns new array, removes the first level arrays
 * flat(n) - number of inner levels to remove
 * flat(infinity) - to remove all levele nested arrays
 * 
 * fill(n) - replaces all the values in the arrays
 *           affects the existing array
 * let a = [1,2,3]
 * a.fill(1) -> [1,1,1]
 * fill(number, start, end - 1)
 * 
 * sort: affects original array
 * arr.sort() - ascending - sorting based on ASCII - A - 65, a - 97, 0 - 48, 1 - 49, ' ' - 32
 * 
 * reverse - original
 * 
 * includes - return bool
 * arr.includes(n)
 * 
 * join - creates new array
*/

// let a = [1,2,3,4]
// console.log(a.join(' ')); // 1 2 3 4
// console.log(a.toString()); //1,2,3,4


/**
 * IndexOf - search left to right
 * indexOf(n, startIndex) startIndex can be negative
 * not found -> -1
 * 
 * lastIndexOf(n, startIndex) - right to left
 * 
 * HighOrderMethod: JSON - JavaScript Object Notation
 * forEach, Map
 * manipulates the array before show in the UI
 */
let alphabets = ['a','b','c','d']
// alphabets.forEach(printElement); // doesn't return

// function printElement(currentElement, index, totalElements){
//    console.log(currentElement);
// }

let newAlpha = alphabets.map(a =>
   { return a + '1'})
console.log(newAlpha);

// chaining method 
// map().sort().fill() 
//A > a

// filter and find
/**
 * filter - returns array
 * find - single element, left to right
 */
alphabets.filter(val => console.log(val))
/**
 * numeric sort, some, every 
 * sort(() => {}) - compare callback function
 * a - b => positive -> swapping ---> ascending
 * 
 * strings are not sorted when compare function is used.
 * 
 * some - logical OR || 
 * every - logical AND 
 * 
 * reduce -> converts into single value
 * 
 *reduce(callBack, initialValue - accumulator)
 callBack = previousValue, currentElement, index, array
 
 Note : previousValue = initialValue
 previousValue = return Value from the previous Iteration
 
 String methods:
 charAt() - cannot work with negative index
 charCodeAt() - returns the ASCII Value
 concat - str1.concat(" ", str2)
 includes(charName, startIndex)
 indexOf(char, startIndex)
 lastIndexOf()
 repeat(count) - str.repeat(2) --> str = 'aa'
 str.replace("js", "Java Script") - replaces the first occurence
 str.slice(startIndex, endIndex? - 2) - negative can work
 str.substring(start, end?) - will swap and didn't work in negative

 split("") - converts to char array
 spilt("", number of index needed in new array)

 startsWith("", startIndex) - default Zero
 endsWith("", postion) - default Last Value
 
 toLowerCase, toLowerCase()

 trim() - removes space in start and end 
 trimStart() - removes first
 trimEnd() - removes last

 
 */