// let numbers=[1,2,3,4,5,6,7,8,9];

// numbers.forEach((num,i,numbers)=>{
//     console.log(num,i,numbers);
// })


let products=[{id:1,name:"Product 1",price:100},
    {id:2,name:"Product 2",price:200},
    {id:3,name:"Product 3",price:300},
    {id:4,name:"Product 4",price:400},
    {id:5,name:"Product 5",price:500},
    {id:6,name:"Product 6",price:600}
]

products.map((product)=>{
    
    console.log(`Product id:- ${product.id*2}`);
    // console.log(`Product Name:- ${product.name}`);
    // console.log(`Product Price:- ${product.price}`);
});

console.log(products)

// products.forEach((product)=>{
//     console.log(`Product id:- ${product.id}`);
//     console.log(`Product Name:- ${product.name}`);
//     console.log(`Product Price:- ${product.price}`);
// });