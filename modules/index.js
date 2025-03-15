// module.exports ---> export
// require ---> import
// these are common js modules


const firstModule = require('./first-module');

console.log(firstModule.add(1, 2));
console.log(firstModule.sub(1, 2));

try {
    console.log(firstModule.divide(1, 0));
} catch (error) {
    console.log(error.message);
}

// module wrapper function
// (function (exports, require, module, __filename, __dirname) {
//     // module code
// });












