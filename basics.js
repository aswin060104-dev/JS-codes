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
function add(a, b, ...rest) {
   console.log(a, b, rest);
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
// let alphabets = ['a','b','c','d']
// alphabets.forEach(printElement); // doesn't return

// function printElement(currentElement, index, totalElements){
//    console.log(currentElement);
// }

// let newAlpha = alphabets.map(a =>
//    { return a + '1'})
// console.log(newAlpha);

// chaining method 
// map().sort().fill() 
//A > a

// filter and find
/**
 * filter - returns array
 * find - single element, left to right
 */
// alphabets.filter(val => console.log(val))
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

 abs() - retuns positive value
 sign() - retuns -1, 0, 1
 sqrt()
 cbrt()
 pow()
 random() - returns from 0 to 1
 toFixed(decimalPlaces)
 ceil() - converts to upper bound
 floor() - converts to lower bound
 round() - school math
 trunc() - removes decimals 

 date object

 getFullyear() - 2024
 getMonth() - index 0 - 11
 getDate() - currentDate 
 getMinutes(), getSecond()
setFullYear(year, month, date)
setMonth(month, date)
 */
// let date = new Date()
// console.log(date.toLocaleDateString()); //27/9/2025
// console.log(date.toLocaleTimeString()); //2:35:43 pm
// console.log(date.toISOString()); // 2025-09-27T09:05:43.601Z
// console.log(date.toDateString()); //Sat Sep 27 2025
// console.log(date.toLocaleString()); //27/9/2025, 2:35:43 pm

/**
 * Prototype (inheritance)  - Blue Print, contains the inbuilt method*
 * Object.create()
 */

// let student = {
//    name : "aswin",
//    age : 20
// }

// let man = Object.create(student) // creating child 
// man.height = 170
// let man2 = Object.create(man) // creating inner level child
// console.log(man.__proto__);
// console.log(man2.__proto__);
// console.log(man2.__proto__.__proto__);
// console.log(Object.getPrototypeOf(man2)); // get above objects properties
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(man2)));


/**
 * Assign Method:
 * Object.assgin(destination, source ) altetnative to spread
 * Object.entries(objectName) ---> [[name : "aswin"],["age" : 20]]
 * fromEntries() --> back to object
 * keys() --> array with keys
 * values() --> array of Values
 * freeze() --> can't create new property or modify the values. Doesn't throw error
 * isFrozen() --> to check whether it is freeze or not
 * 
 * 
 * This context
 * normal function'sthis will point the current objects property
 * In Arrow, function, it points to global Object
 * Undeclared variables, var are added as a property in global object
 * 
 * call, apply and bind
 * 
 * call - uses the properties of other object over the current. Properties can be used even though their is no relationship. property values are overrided.
 * apply - second param must be array
 * bind - The values will be binded in that object's function. It can be used later by calling
 * 
 * Whereas prototypes has relationship by using the create() method
 */
// let person = {
//    name : "raja",
//    role : "software dev",
//    intro : function(){
//       console.log(this.name + " "+ this.role);
//       return "This is " + this.name;
//    }
// }

// let person1 = {
//     name : "aswin",
//    role : "developer"
// }
// person.intro()
// person.intro.call(person1)
// person.intro.apply(person1, [10, 20] )  // second parameter must be object

// let a = person.intro.bind(person1)
// console.log(a());

// objectName, normalParams
/**
 * Memory management area
 * Stack - primitive values
 * Heap - non-primitive --- object, array
 * 
 * call by value 
 * let x = 10;
 * let y = x;
 * x = 20;
 * log -- x, y --- 20, 10
 * 
 * 
 * call by reference:
 * Stack
 * address | variables | values
 *  0x100  | obj1      | 0x200
 *  0x104  | arr1      | 0x204
 *  0x108  | obj2      | 0x200
 * 
 * Heap Memory
 * 
 * Address | Object
 * 0x200   | {name : "raja"}
 * 0x204   | [1,2,3]
 * 
 * values will be changed dynamically - size will be varied
 * 
 * Deep copy - values will not be affected by any other assign
 *             spread method, JSON.parse and JSON.stringify
 * shallow copy - values will be changed in both obj when it was changed in one.
 *                first level only gets new reference
 *  */

// let person1 = {
//    name1 : "aswin",
//    additional : {
//       location : "madurai"
//    }
// }

// let person2 = {...person1, additional : {...person1.additional}} //deep copy
// let a = [1,2,3, [4,5,6]]

/** single threaded language
 * synchronous - executes line by line
 * webApi (browser) - settimeout ()
 * 
 * call stack(LIFO) -
 * webApi - 
 * CallBack queue FIFO - 
 * eventLoop checks stack, if nothing is in process, then checks in callBack queue
 * 
 * function execution stack
 * global memory context
 * 
 * microTask - first priority --> promises
 * macroTask - second priority --> settimeout, setInterval
 * 
 * Promise (object)- resolve(then), reject(catch), pending
 * promise(executor) -> (callback, callback)
 * finally - this will execute after the execution of resolve and reject
 */

// let promise = new Promise((resolve, reject) => {
//    let bool = true;
//    if(bool){
//       resolve("Success")
//    }
//    else{
//       reject("Error")
//    }
// })
// promise.then((msg) => {
//    console.log(msg);
//    return "First sucess"
// }).then((msg) => {
//    console.log(msg); // "First sucess"
// }).catch((msg) => {
//    console.log(msg);
// })

// function fetchData(success, failure) {
//    let dataFetch = true
//    if (dataFetch) {
//       success("Date fetches Successfully")
//    }
//    else {
//       failure("Some error occured")
//    }
// }
// This is a callback hell
// fetchData(
//    (msg) => {
//       console.log(msg)
//       fetchData(
//          (msg) => {
//             console.log("Secong time calling : "+msg)
//          },
//          (error) => {
//             console.log(error);
//          }
//       )
//    },
//    (error) => {
//       console.log(error);
//    }
// )

/**
 * async await - have try and catch - Exception handling
 * promise waits in callback queue so doesn't block the flow
 * await works as synchronous, only receives resolve
 * Needs a catch block to recevie the error
 * 
 * In a MODULE or FILE (without async keyword word), await will act as synchronous i.e. it will wait to receive data
 * In a function, the codes inside the function will act as synchronous. When the async function is called, it will be added to the callback queue and waits
 */

// let newPromise = new Promise((resolve, reject) => {
//    let execution = true;
//    if(execution){
//       resolve("Execution Sucess")
//    }
//    else{
//       reject("Execution falies")
//    }
// })

// // let msg = await newPromise; // waits to receive the msg as resolve, if reject then catch will be
// newPromise.then((msg) => console.log(msg)) // This will be executed after all the executions
// // console.log(msg);
// console.log("Last")

// async function learnAsync() {
//    try{
//       let data = await newPromise;
//       console.log(data);
//    }
//    catch(err){
//       console.log(err)
//    }
// }

// learnAsync();
// console.log("This will be executed first because of async function call")\

/**
 * Fetch API
 * API - Application Data Interface (webservice) - used to share data
 * HTTP - HyperText Transfer Protocal sends a request the server 
 * (rest - representational State Transfer), Soap - simple access protocol
 * Json - Javascript object notation, light weight, Easy to convert to Json 
 * XML was used in old school
 */
// try {
//    fetch('https://fakestoreapi.com/produs', {
//       method : 'GET'
//    }).then(
//       (msg) => {
//          if(!msg.ok) // If invalid URL, then ok will be false
//             throw new Error("Invalid URL")
//          return msg.json();
//       }
//    ).then(
//       (res) => {
//          console.log(res);
//       }
//    ).catch(
//       (err) => {
//          console.log(err)
//       }
//    )
// }
// catch(err){
//    console.log("Error Here :  " + err.message)
// }

/**
 * Modules
 * export keyword can be used before variable, function and class
 * If imports and exports are used, then file extension must be .mjs or in package.json type : module
 * 
 * export default - only one default export is allowed
 * this export can be used without {} while importing
 * 
 * named export - multiple named export is allowed
 * this export must be used with {} while importing
 * import * as alias from 'path' - imports all the exports in a file
 * 
 * while importing, the path must be relative or absolute path
 * 
 * npm - node package manager
 * third party packages
 * 
 * venila js - pure js (without any third party packages)
 * npm init (creates package.json)
 * if type: 'module', then file extension needs to be .js
 * ts is a superset of js
 * 
 * In script tag, module must be specified
 * <script type="module" src="path"></script>
 */