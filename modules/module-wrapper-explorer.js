console.log("Node module wrapper demo");

const firstModule = require("./first-module");

// console.log('module', module);
// console.log('require', require);
// console.log('module.exports', module.exports);
console.log('__filename', __filename);
console.log('__dirname', __dirname);


firstModule.add(1, 2);








// Output1 --
// Node module wrapper demo 
// module {
//   id: '.',
//   path: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules',
//   exports: {},
//   filename: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/node_modules',
//     '/Users/aryansaxena/Desktop/Projects-Personal/Node/node_modules',
//     '/Users/aryansaxena/Desktop/Projects-Personal/node_modules',
//     '/Users/aryansaxena/Desktop/node_modules',
//     '/Users/aryansaxena/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kIsExecuting)]: true
// }
// require [Function: require] {
//   resolve: [Function: resolve] { paths: [Function: paths] },
//   main: {
//     id: '.',
//     path: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules',
//     exports: {},
//     filename: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/node_modules',
//       '/Users/aryansaxena/Desktop/Projects-Personal/Node/node_modules',
//       '/Users/aryansaxena/Desktop/Projects-Personal/node_modules',
//       '/Users/aryansaxena/Desktop/node_modules',
//       '/Users/aryansaxena/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ],
//     [Symbol(kIsMainSymbol)]: true,
//     [Symbol(kIsCachedByESMLoader)]: false,
//     [Symbol(kIsExecuting)]: true
//   },
//   extensions: [Object: null prototype] {
//     '.js': [Function (anonymous)],
//     '.json': [Function (anonymous)],
//     '.node': [Function (anonymous)]
//   },
//   cache: [Object: null prototype] {
//     '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper.js': {
//       id: '.',
//       path: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules',
//       exports: {},
//       filename: '/Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper.js',
//       loaded: false,
//       children: [],
//       paths: [Array],
//       [Symbol(kIsMainSymbol)]: true,
//       [Symbol(kIsCachedByESMLoader)]: false,
//       [Symbol(kIsExecuting)]: true
//     }
//   }
// }
// module.exports {}
// __filename /Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper.js
// __dirname /Users/aryansaxena/Desktop/Projects-Personal/Node/modules


// Output2 --
// Node module wrapper demo
// First module /Users/aryansaxena/Desktop/Projects-Personal/Node/modules/first-module.js
// First module /Users/aryansaxena/Desktop/Projects-Personal/Node/modules
// __filename /Users/aryansaxena/Desktop/Projects-Personal/Node/modules/module-wrapper-explorer.js
// __dirname /Users/aryansaxena/Desktop/Projects-Personal/Node/modules