console.log("Hello World");
const path = require("path");


console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));


const parsePath = path.parse(__filename);
console.log(parsePath);

const joinPath = path.join(__dirname, "modules", "first-module.js");
console.log(joinPath);

const resolvePath = path.resolve("modules", "first-module.js"); // This will resolve the path to the absolute path
console.log(resolvePath);

// normalize path
// path.normalize() is used to normalize the path by converting it to the correct format
const normalizePath = path.normalize("/modules/first-module.js");
console.log(normalizePath);

// relative path
const relativePath = path.relative(__dirname, "/modules/first-module.js"); // This will return the relative path from the current directory to the given path
console.log(relativePath);


// Note that normalize() is different from resolve():
// normalize() only cleans up the path syntax
// resolve() creates an absolute path and also resolves relative paths against the current working directory
// Also important to note that normalize() does not verify if the path actually exists in the filesystem - it only manipulates the string syntax.
