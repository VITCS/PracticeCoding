// Non-curried function

function add(x, y) {
  return x + y;
}

console.log(add(3, 5)); // Output: 8
// currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions that each take a single argument. It allows you to create specialized, reusable functions by partially applying arguments one at a time. Currying can be useful for creating more flexible and composable code
// Curried function
function curryAdd(x) {
  return function (y) {
    return x + y;
  };
}

const addThree = curryAdd(3);
console.log(addThree(5)); // Output: 8

//In JavaScript, a closure is a fundamental concept that involves the ability of a function to remember and access its lexical (or outer) scope, even after that function has finished executing and its outer scope has technically exited. In simpler terms, a closure allows a function to "close over" or capture variables and data from its surrounding context, making them available for use even when the function is called in a different context.

// --------------------------
// Functional implementation

// function curry(fn) {
//     return function curried(...args) {
//       if (args.length >= fn.length) {
//         return fn(...args);
//       } else {
//         return function (...moreArgs) {
//           return curried(...args, ...moreArgs);
//         };
//       }
//     };
//   }

//   // Usage with the add function
//   const curriedAdd = curry(add);
//   const addThree = curriedAdd(3);
//   console.log(addThree(5)); // Output: 8


// Hoisting in JavaScript is a behavior that occurs during the compilation phase of the code, where variable and function declarations are moved to the top of their containing scope before the code is executed. This means that you can use variables and functions in your code before they are actually declared. However, it's important to understand that only the declarations are hoisted, not the initializations.


// ---------------------- Event Loop-----

// Things learned:
// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

// The Event Loop pushes the "queue" into the Call Stack only when the Call Stack is empty (i.e. the global execution context has been pushed off the call stack).
// The order in which the Event Loop works is:
// 1. Call Stack
// 2. Microtask Queue
// 3. Callback Queue
//Event loop continuously observes call stack and when it is empty it transfers task to call stack.
//Promises and mutation observer are stored in API environment and then transferred to microtask queue.
//Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.

// Asynchromous callbacks are handled by an event -loop in nodejs. it is foundation of the non-blocking input/output in nodejs, making it one of the most important features of the environment.

//Callbacks are functions that are passed as arguments to other functions and are executed once the asynchronous operation is complete. Callbacks are a traditional way of handling asynchronous operations in JavaScript, but they can lead to callback hell (nested callbacks) and make code harder to read and maintain.

//Promises are a more modern way of handling asynchronous operations and provide a more structured and readable approach. Promises represent a value that may be available now, or in the future, or never. They have methods like .then() and .catch() to handle the success and error cases.

const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve("Promise1");
  },2000)
})
const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve("Promise2");
  },2000)
})
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve("Promise3");
  },2000)
})
Promise.all([p1, p2, p3]).then((prMsgs) => {
console.log(prMsgs);
});
// ------- Event emitter----

// Event emitter is a class which holds all the objects that can emit events, whenever an object from the event emitter class throws an event, all the attached functions are called upon synchronously.

const EventEmitter = require('events');
const { resolve } = require('path');

class MyEvent extends EventEmitter{

  const myEmmiter = new MyEvent();
  myEmmiter.on('event', ()=>{
    console.log('an event occured');
  });
  myEmmiter.emit('event');
}

// ------ REPL------

// REPL performs follow desired task
// Read - Reads the user's input, parses the input inot javascript data-structure and stores in memory
// Eval- Takes and evaluates the data structure
// Print- print the resutl
//Loop - loops the above command until user press ctrl+c twice


const p1 = new Promise((resolve, reject) =>{

  setTimeout(()=>{
    resolve('promes1')
  }, 1000)
})

p1.then((msgs) => {
  console.log(msgs)
}).catch(err)

//-------------

const sqrt = (a) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a*a)
    }, 1000)
  })
}

(async function() {

  let res = await sqrt(5)
  console.log(res)
})()