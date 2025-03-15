// callback logic concept

// callback is a function that is passed as an argument to another function and is called when the first function is finished 

// used in asyncronous programming for 
// 1) reading files 
// 2) making network requests 
// 3) database queries

// "hey when you're done with the task, call the callback function"


// hello(goodbye)

// function hello(callback){
//     console.log("hello");
//     callback();
// }
// function goodbye(){
//     console.log("goodbye");
// }

// two main issues with callbacks
// 1) callback hell
// 2) inversion of control

// callback hell
// when we have multiple nested callbacks, the code becomes deeply indented and harder to read/maintain

// inversion of control
// when we pass a function as an argument to another function and it is called asynchronously, we lose control over the execution flow






