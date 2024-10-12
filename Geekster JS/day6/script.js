//higher order function is a function which takes another function as an argument and returns a new function
// function getCapture(capture){
//     capture();
// }
// getCapture(function(){
//     console.log("I am captured")
// });

//returning a function as a value
// function returnFunction(){
//     return function(){
//         console.log("Hii")
//     }
// }

// returnFunction()();


function calculate(operation,initialValue,numbers){
    let total=initialValue;
    for (const num of numbers){
        total=operation(total,num)
    }
    return total;
}

function sum(n1,n2){
    return n1+n2;
}

function multiply(n1,n2){
    return n1*n2;
}

console.log(calculate(sum,0,[1,2,3,4,5,6,7,8,9]))

console.log(calculate(multiply,1,[1,2,3,4,5,6,7,8,9]))

//anonymous function is the function with no name
// let add=function(){
//     console.log(5+9)
// }
// add();


//named function
// function addToCart(product){
//     console.log(`product ${product} is added in the cart.`);
// }
// addToCart("tshirt");
// addToCart("pant");