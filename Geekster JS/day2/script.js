// console.log("Hello World");

// if else


// let grocerySpending=1600;

// if(grocerySpending>1000){
// let discount=0.10*grocerySpending;
// console.log("you get a 10% discount", discount);
// }
// else if(grocerySpending>500){
//     let discount=0.05*grocerySpending;
//     console.log("you get a 5% discount", discount);
// }else{
   
//     console.log("No discount");
// }


//switch statements

// let shippingOption="dfs";

// switch(shippingOption){
//  case "Standard":
//     console.log("Your package takes 3-5 days");
//     break;
// case "One-Two day":
//     console.log("Your package takes 1-2 days");
//     break;

//  case "Express":
//     console.log("Your package takes 1 days");
//     break;

// default:
//     console.log("Invalid shipping option");
//     break;
// }

// let items=[10,20,30,40,50,60,70];
// let sum=0;

// for(let i=0; i<items.length; i++){
//     sum+=items[i];
// }

// let i=0;
// while(i<items.length){
//     sum+=items[i];
//     i++;
// }

// console.log("Total "+ sum);

// function printName(name){
//     return name;
// }
// console.log(printName("Aishwarya"));

//scoping
// let a=10;
// function sum(){
//     let b=20;
//     console.log(a);
//     console.log(b);
// }
// if(true){
//     let c=30;
//     console.log(a);
//     console.log(c);
// }


// sum();
// console.log(a);
// console.log(b);
// console.log(c);

// {
//     var a1=90;
// }

// console.log(a1);

//scoping chain
var a=25;
function outer(){
    var c=10;
    function inner(){
        var e=20;
        console.log(c,e,a);
    }
    inner();
}

outer();
