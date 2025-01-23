// node is environment to run javascript code outside of browser
// node is javascript runtime environment
// node is built on chrome v8 engine

// Globals - no window
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env(environment) where the program is being executed

console.log(__dirname);
console.log(__filename);
// /Users/aryansaxena/Desktop/Projects-Personal/Node
// /Users/aryansaxena/Desktop/Projects-Personal/Node/globals.js


// diffeence between setTimeout and setInterval
// setTimeout - runs once after a given time
// setInterval - runs repeatedly after a given time

setTimeout(() => {
    console.log("Hello World setTimeout");
}, 1000);

setInterval(() => {
    console.log("Hello World setInterval");
}, 1000);