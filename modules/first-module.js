function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log("First module", __filename);
console.log("First module", __dirname);

module.exports = { add, sub, divide };