// promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// 3 states of a promise
// 1) pending
// 2) fulfilled
// 3) rejected

// promises solves the problem of callback hell and inversion of control  

// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);
// console.log(promise);

// promise.then(function (orderId) {
//     console.log(orderId);
// })
// .catch(function (err) {
//     console.log(err.message);
// })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         // create order
//         // validate cart
//         if (isValidCart(cart)) {
//             const orderId = "12345";
//             setTimeout(function () {
//                 resolve(orderId); // fulfilled and orderId is passed as an argument to resolve
//             }, 5000);
//         } else {
//             const err = new Error("Cart is not valid");
//             reject(err); // rejected and err is passed as an argument to reject
//         }
//     })
//     return pr;
// }

// function isValidCart(cart) {
//     return true;
// }

const cart = ["shoes", "pants", "kurta"];


// chaining promises
// attaching callbacks to the promise object
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch(function (err) {  // attaching a failure callback to the promise
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log(orderId);
        return proceedToPayment(orderId); // returns a promise and  the value of the promise is passed as an argument to the then method 
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // create order
        // validate cart
        if (isValidCart(cart)) {
            const orderId = "12345";
            setTimeout(function () {
                resolve(orderId); // fulfilled and orderId is passed as an argument to resolve
            }, 5000);
        } else {
            const err = new Error("Cart is not valid");
            reject(err); // rejected and err is passed as an argument to reject
        }
    })
    return pr;
}

function isValidCart(cart) {
    return false;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment successful");
    })
}