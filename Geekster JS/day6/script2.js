//arrow function
// let hello=()=>{
//     console.log("Hello!");
// }
// hello();

// let sum=(a,b)=>a+b;
// let ans=sum(10,20);

// console.log(ans);

//IIFE=Immediately Invoked Function Expression
// (()=>{
//     console.log(4+9)
// })()

// let a=10;
// function hello (){
//      a=20;
//     console.log(a);
// }
// hello();
// console.log(a);

// var a=10;
// (function(a){
//     a=50;
//     console.log(a)
// })(a);
// console.log(a);

var length=10;
var width=30;

function calculate(length,width){
    var area= length*width;
    return area;
}

var rectangle=calculate(length,width);
console.log(rectangle)