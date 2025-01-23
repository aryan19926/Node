// console.log(module);
// {
//     id: '.',
//     path: '/Users/aryansaxena/Desktop/Projects-Personal/Node',
//     exports: {},
//     filename: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/aryansaxena/Desktop/Projects-Personal/Node/node_modules',
//       '/Users/aryansaxena/Desktop/Projects-Personal/node_modules',
//       '/Users/aryansaxena/Desktop/node_modules',
//       '/Users/aryansaxena/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ],
//     [Symbol(kIsMainSymbol)]: true,
//     [Symbol(kIsCachedByESMLoader)]: false,
//     [Symbol(kURL)]: undefined,
//     [Symbol(kFormat)]: undefined,
//     [Symbol(kIsExecuting)]: true
//   }

const a = "aryan";
const s = "saxena";

// say hello    
const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

module.exports = { a, s, sayHello };
// console.log(module);
